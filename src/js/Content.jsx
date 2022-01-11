import React from 'react';
import Navigator from './Navigator';
import Data from './Data';
import styled from 'styled-components';
import '../css/Content.scss';
import { useRecoilState } from 'recoil';
import { Sitebar_state } from './state';

function Content() {
    const [check, setCheck] = useRecoilState(Sitebar_state);

    return (
        <div className="Content">
            <Overlay visible={check}/>
            <Navigator />
            <Data />
        </div>
    );
}

const Overlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`

export default Content;