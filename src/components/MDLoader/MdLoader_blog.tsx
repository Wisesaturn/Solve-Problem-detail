import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import remarkPrism from 'remark-prism'
import { unified } from 'unified'

const postsDir = path.join(process.cwd(), 'src/pages/posts/developLog/blog')
// process.cwd() : 현재 작업 Directory 반환
// __dirname : 현재 스크립트의 Directory 반환

interface Post_type {
    id : string
    date?: string
}

const detailFilter = (d : string) => {
    const resultContent = d .replace(/([*_#`<>~])|(^ )| {4}|&nbsp;/g, '') // markdown 기호 삭제, 첫문단 첫번째 공백 삭제, tab 키 삭제, &nbsp;(강제 줄바꿈용) 삭제
                            .replace(/[\n]/g, ' ') // 줄바꿈 공백으로 변경

    return resultContent
}

// 날짜별로 게시물을 정리해놓는 함수 (default) ---------------------
export const MDLoader_Sort = () => {
    const fileNames = fs.readdirSync(postsDir)
    // '현재 작업 Directory/posts' = postsDir의 경로를 읽어옵니다. (readdirSync : 동기 함수)
    const targetFiles = fileNames.filter(file => { return path.extname(file).toLowerCase() === '.md'})
    // '.md' 파일만 추출합니다.
    const allPostsData = targetFiles.map(fileName => {
    // Post할 Data를 'map'을 통하여 가져옵니다.
        const id = fileName.replace(/\.md$/, '')
        // ".md" 부분을 ""로 바꿔준 후 남은 파일명을 id에 저장합니다. (replace를 이용)
        const fullPath = path.join(postsDir, fileName)
        // postsDir 경로에 가서 fileName에 해당하는 path를 가져옵니다.
        const fullContents = fs.readFileSync(fullPath, 'utf8')
        // fullpath에 해당하는 파일을 'utf8' 형식을 통해 내용을 읽어옵니다. (readFileSync : 동기 함수)
        const matterResult = matter(fullContents)
        // 'gray-matter'의 'matter'를 사용하여 post할 data의 section를 파싱(parse)합니다.
        const detail = detailFilter(matterResult.content)
        // 'content' 부분을 가져와 filtering합니다. (markdwon 문법 없애기)
        
        return {
            id,
            detail,
            ...matterResult.data,
        } // id와 matterResult의 data를 합칩니다.
    })

    return allPostsData.sort((a : Post_type, b : Post_type) : number => {
    // 날짜(date)를 이용해 post를 정렬합니다.
        if (a.date < b.date) { return 1 } else { return -1 }
    })
}

// 각 'md'파일 별로 Post될 Data를 가져오는 함수 ----------------
export const MDLoader_PostData = async (id : string) => {
    const fullPath = path.join(postsDir, `${id}.md`)
        // postsDir 경로에 가서 'id'에 해당하는 path를 가져옵니다.
    const fullContents = fs.readFileSync(fullPath, 'utf8')
    // fullpath에 해당하는 파일을 'utf8' 형식을 통해 내용을 읽어옵니다. (readFileSync : 동기 함수)
    const matterResult = matter(fullContents)
    // 'gray-matter'의 'matter'를 사용하여 post할 data의 section를 파싱(parse)합니다.
    
    const processedContent = await unified()
        .use(remarkParse) // metadate 무시 (오로지 내용만)
        .use(remarkGfm) // 깃허브용 md 파일 형식 추가 (취소선, 표 등의 기능)
        //@ts-ignore (remarkPrism ts 규칙 무시)
        .use(remarkPrism) // <code>용 highlight
        .use(remarkHtml, { sanitize: false })
        .process(matterResult.content)
        
    // remark 라이브러리를 이용하여 md 파일(matterResult에 저장된 내용)을 HTML 값으로 변환해줍니다.
    const contentHTML = processedContent.toString()
    // HTML 값으로 받아온 데이터를 string 값으로 변환합니다.

    return {
        id,
        contentHTML,
        ...matterResult.data,
    } // id와 contentHTML, matterResult의 data를 합칩니다.
}

// (( 'md파일'을 추가하면 동적으로 페이지를 생성해주는 역할 ))
// FileName을 Path를 이용하여 parameter로 저장해 놓는 함수 ---------------------
export const MDLoader_Path = () => {
    const fileNames = fs.readdirSync(postsDir)
    //postsDir 경로의 파일 이름을 읽어옵니다.

    return fileNames.map(fileName => {
        // 읽어온 파일 이름을 map을 활용해 객체 형식으로 return 합니다.
        // 결과값 : [ { params : { id : 001 }}, { params : { id : 002 }} ... ]
        
        return {
            params: { id: fileName.replace(/\.md$/, '') },
        }
    })
}

export default MDLoader_Sort
