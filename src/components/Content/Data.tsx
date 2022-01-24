import Comment from './comment'
import MainContent from './main-content'
import React from 'react'
import SearchArea from './Search_area'
import ShowError from './ShowError'
import Title from './title'
import styled from 'styled-components'

interface Dprops {
    content : string
}

const Data = (props: Dprops) => {
    const errorVisible = props.content === '404' ? 'none' : 'flex' // 404 Page Check

    return (
        <>
        <DataWrap visible={errorVisible}>
            <SearchArea content={props.content}/>
            <Title content={props.content} />
            <MainContent content={props.content}/>
            <Comment content={props.content}/>
        </DataWrap>
        <ShowError content={props.content} />
        </>
    )
}

const DataWrap = styled.div<{visible : string}>`
    // Data CSS -------------------
    display: ${(props) =>{ return props.visible }};
    flex-direction: column;
    padding: 1rem 2rem;
    width: 97%;
    overflow-y: auto;
    overflow-x: hidden;
    white-space: pre-wrap;

    &::-webkit-scrollbar {
       width: 8px;

       &-thumb {
           background-color: var(--scrollbar);
           border-radius: 3px;
           box-shadow: 0px 0px 2px 1px inset var(--scrollbar-bg);
       }

       &-track {
           background-color: var(--scrollbar-bg);
       }
    }

    > .title_wrap,
    .comment,
    .main_content_wrap {
       width: inherit;
       border-bottom: 1px solid var(--bottom-line);
       padding: 1.6rem 0.8rem;
    }

    > .title_wrap {
       > .Category {
           padding: 0 0 1rem;
           > a {
               text-decoration: none;
               color: inherit;
           }
       }
       > .title {
           display: flex;
           justify-content: space-between;
            font-size: 28px;
            font-weight: bold;
            color: var(--content-ft);
            > .Date {
                margin-top: auto;
                font-size: 16px;
                font-weight: normal;
                color: var(--normal-ft);
           }
       }
    }

    > .main_content_wrap {
       line-height: 32px;
       > .Tag {
           display: flex;
           padding: 0.6rem;

           > .Tag_Title,
           .Tag_List {
               margin: 0.6rem;
               padding: 0.3rem;
           }
           > .Tag_Title {
               color: var(--normal-bg);
               background-color: var(--normal-ft);
           }
       }
    }

    > .comment {
       font-size: 16px;
    }
// Data CSS Ended ----------------------
`

export default Data
