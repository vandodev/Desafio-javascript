document.querySelector('.busca').addEventListener('submit',(event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    console.log(input);
}