function mySubmit (){
    alert("submit sucessful")
}
function linked(){
    const link = document.createElement('a');
    link.href = 'https://in.linkedin.com/in/hariharan-p-k-0a597a192';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // location.href("https://in.linkedin.com/in/hariharan-p-k-0a597a192")
    // location.replace("https://in.linkedin.com/in/hariharan-p-k-0a597a192");
}
function insta(){
    const link = document.createElement('a');
    link.href = 'https://www.instagram.com/ig.boltstw/';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // location.replace("https://www.instagram.com/ig.boltstw/");
}


// function downloadpdf(){
//     const link = document.createElement('a');
//     link.href = 'https://drive.google.com/file/d/1dcgvJETz7ckL2AhRsPjgv_0e50A4nWuW/view';
//     link.download = 'Myresume.pdf'
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }