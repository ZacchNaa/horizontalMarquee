const wrappers = document.querySelectorAll(`wrapper`);
const wrapperOne = document.querySelectorAll(`wrapperOne`);

const data = [
    {id:1, title:`lable 1`},
    {id:2, title:`lable 2`},
    {id:3, title:`lable 3`},
    {id:4, title:`lable 4`},
    {id:5, title:`lable 5`},
    {id:6, title:`lable 6`},
    {id:7, title:`lable 7`},
    {id:8, title:`lable 8`},
    {id:9, title:`lable 9`},
    {id:10, title:`lable 10`},
]

const createDivHandler = () => {
    data.forEach((element) => {
			const newDiv = document.createElement(`div`);
			newDiv.classList.add(`item`);
			newDiv.innerText = `${element.title}`;
            document.body.appendChild(newDiv);
			// wrappers.forEach((wrapper) => {
			// });
		});
}

createDivHandler()
