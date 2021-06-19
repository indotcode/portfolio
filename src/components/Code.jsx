import { observer } from "mobx-react";
import AceEditor from "react-ace";
import styles from './Code.module.scss';
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/ext-language_tools";


function Code() {
    const onChange = (newValue) => {
        console.log("change", newValue);
      }
    return (
        <div>
            <h2>Sample code</h2>
            <AceEditor
                placeholder="Placeholder Text"
                mode="html"
                theme="crimson_editor"
                name="blah2"
                height="200px"
                width="100%"
                className={styles.editor}
                // onLoad={this.onLoad}
                // onChange={this.onChange}
                fontSize={16}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={false}
                value={`<div class='golden-grid'> 
    <div style='grid-area:
    11 / 1 / span 10 / 
    span 12;'>
    </div> 
</div>`}
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