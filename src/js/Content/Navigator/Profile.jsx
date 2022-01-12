import React from 'react';
import '../../../css/Profile.scss';
import { useRecoilState } from 'recoil';
import { Sitebar_state } from '../../state';

const Profile = () => {
    const [check, setCheck] = useRecoilState(Sitebar_state);

    return (
        <div className="Profile">
            (( 여기는 사진을 넣을 계획 ))
            <div className="Profile_Content">
                프로필 영역입니다. (아무래도 내용?)
            </div>
        </div>
    );
}
// 나가는 버튼 따로 png로 만들 예정

export default Profile;