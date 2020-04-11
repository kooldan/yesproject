let posts = [
	{
		post:'test',
		postTitle:'testest1',
		user:'testuser',
	},
	{
		post:'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum test0',
		postTitle:'testest1',
		user:'testuser0',
	},
	{
		post:'Lorem ipsum test1',
		postTitle:'testest1',
		user:'testuser1',
	},
	{
		post:'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
		postTitle:'testest1',
		user:'testuser3',
	},
	{
		post:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
		postTitle:'testest1',
		user:'testuser5',
	}
]

let elem = document.querySelector(".main");
for (let i = 0; i < posts.length; i++) {
	elem.innerHTML += '<div id="card" class="card mb-3" style="max-width: 18rem;"><div class="card-body"><h5 id="card-title" class="card-title">'+posts[i].postTitle+'</h5><p id="card-text" class="card-text">'+posts[i].post+'</p></div><div id="card-footer" class="card-footer">От '+posts[i].user+'</div></div>'
}

let sel = document.querySelector(".demo__card-cont");
for (i = 0; i < posts.length; i++) {
	sel.innerHTML += '<div class="demo__card"><div class="demo__card__top brown"><div class="demo__card__img"></div><p class="demo__card__name">'+posts[i].user+'</p></div><div class="demo__card__btm"><p class="demo__card__we">'+posts[i].postTitle+'</p></div><div class="demo__card__choice m--reject"></div><div class="demo__card__choice m--like"></div><div class="demo__card__drag"></div></div>'
}


let postInput = document.getElementById("post");
let postTitleInput = document.getElementById("postTitle");
let userInput = document.getElementById("user");
let message = document.getElementById("message");

function addpost(){
	if(postInput.value != "" && postTitleInput.value != "" && userInput.value != ""){
		posts.push({post:postInput.value, postTitle:postTitleInput.value, user:userInput.value});
		elem.innerHTML += '<div id="card" class="card mb-3" style="max-width: 18rem;"><div class="card-body"><h5 id="card-title" class="card-title">'+postTitleInput.value+'</h5><p id="card-text" class="card-text">'+postInput.value+'</p></div><div id="card-footer" class="card-footer">От '+userInput.value+'</div></div>';
		sel.innerHTML += '<div class="demo__card below"><div class="demo__card__top brown"><div class="demo__card__img"></div><p class="demo__card__name">'+userInput.value+'</p></div><div class="demo__card__btm"><p class="demo__card__we">'+postTitleInput.value+'</p></div><div class="demo__card__choice m--reject"></div><div class="demo__card__choice m--like"></div><div class="demo__card__drag"></div></div>'
		
		postInput.value = "";
		postTitleInput.value = "";
		userInput.value = "";
		message.innerHTML = "<p class='text-success mb-0 mt-2'>Пост успешно отправлен</p>";
	}
	else{
		message.innerHTML = "<p class='text-danger mb-0 mt-2'>Одно из ваших полей пустое</p>";
	}
}
/*let file = JSON.parse(fs.readFileSync('data.js', 'utf-8'));
file.posts[file.posts.length] = "penis";
fs.writeFileSync('data.js', JSON.stringify(file, null, 2));*/