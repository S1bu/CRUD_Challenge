const blogItem = document.querySelector('#todo-input'); // assigning my input details
//  let blogList = JSON.parse(localStorage.getItem('blog-list')) ? JSON.parse(localStorage.getItem('blog-list')) : [];//list of blogs

let blogList = JSON.parse(localStorage.getItem('blog')) ? JSON.parse(localStorage.getItem('blog')) : [];
 let decoyID = blogList[blogList.length-1] ? blogList[blogList.length-1].id +1 : 1;
let image = document.querySelector('.image');
let title = document.querySelector('.title');
let description = document.querySelector('.description');
let content = document.querySelector('.content');
let display = document.querySelector('.blogs')
//-------------------ADDING FUNCTION-----------------------------


function add_post(){
    event.preventDefault(); //prevent page reload

        blogList.push({ // push to list
            id: decoyID,
            title: title.value,
            imageUrl: image.value,
            description: description.value,
            content: content.value,
            date: new Date( )
        });
        decoyID++; //increase the id number
        localStorage.setItem( 'blog',JSON.stringify(blogList))
        console.log(blogList);
        // renderList();
        localStorageDisplay()   
    }

//---------------------------------------------------------------------
function localStorageDisplay(){
 
let showBlog = JSON.parse(localStorage.getItem('blog'))

 
    document.querySelector('.blogs').innerHTML = "";
    showBlog.forEach((display) => {
        document.querySelector('.blogs').innerHTML +=
        `
            <tr>
                <td style="border: 2px  solid black;text-align: center;">${display.id}</td>
                <td style="border: 2px  solid black;text-align: center;">${display.title}</td>
                <td style="border: 2px  solid black;text-align: center;">${display.description}</td>
                <td style="border: 2px  solid black;text-align: center;">${display.content}</td>
                <td style="border: 2px  solid black;text-align: center;">${display.date}</td>
                <td style="border: 2px  solid black;text-align: center;"><img src="${display.imageUrl}" width="100px" height="100"></td>
                <td style="border: 2px  solid black;text-align: center;"><button><i class="bi bi-plus"></i></button></td>
                <td style="border: 2px  solid black;text-align: center;"><button><i class="bi bi-trash3-fill"></i></button></td>
            </tr>
        `
    });
}

