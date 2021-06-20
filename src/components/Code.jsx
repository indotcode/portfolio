import React from "react";
import { observer } from "mobx-react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";
import './Code.scss';
import store from "../store";




//tomorrow

function Code() {
    return (
        <div>
            <h2>Sample code</h2>
            <AceEditor
                placeholder=""
                mode="html"
                theme="tomorrow"
                name="blah2"
                height="170px"
                width="100%"
                className="aseEditor"
                // onChange={store.codeChange()}
                fontSize={16}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={false}
                value={store.code}
                setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 4,
            }}/>
        </div>
    );
}

export default observer(Code);