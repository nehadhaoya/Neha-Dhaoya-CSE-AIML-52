const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const output = document.getElementById("output");

const defaultCode = {
    html: "<h1>Hello World</h1>",
    css: "h1 {color:red;}",
    js: "console.log('Hello JS');"
};

htmlCode.value = defaultCode.html;
cssCode.value = defaultCode.css;
jsCode.value = defaultCode.js;

/* Tab Switch */
function openTab(evt, tab) {
    document.querySelectorAll(".editor").forEach(e => e.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    document.getElementById(tab).classList.add("active");
    evt.currentTarget.classList.add("active");
}

/* Run */
function runCode() {
    const code = `
    <html>
    <style>${cssCode.value}</style>
    <body>
    ${htmlCode.value}
    <script>${jsCode.value}<\/script>
    </body>
    </html>`;

    output.contentDocument.open();
    output.contentDocument.write(code);
    output.contentDocument.close();
}

/* New */
function newProject() {
    if(confirm("Clear project?")) {
        htmlCode.value = defaultCode.html;
        cssCode.value = defaultCode.css;
        jsCode.value = defaultCode.js;
        runCode();
    }
}

/* Reset */
function resetCode() {
    htmlCode.value = "";
    cssCode.value = "";
    jsCode.value = "";
    runCode();
}

/* Save */
function saveFile() {
    const file = `
    <html>
    <style>${cssCode.value}</style>
    <body>
    ${htmlCode.value}
    <script>${jsCode.value}<\/script>
    </body>
    </html>`;

    const blob = new Blob([file], {type: "text/html"});
    saveAs(blob, "my-page.html");
}

/* Auto Run */
htmlCode.oninput = runCode;
cssCode.oninput = runCode;
jsCode.oninput = runCode;

runCode();
