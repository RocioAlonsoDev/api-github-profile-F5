const APIURL = 'https://api.github.com/users/';
const searchInput = document.getElementById('search');

const main = document.getElementById('main');
const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const followers = document.getElementById('followers');
const repos = document.getElementById('repos');
const profileLink = document.getElementById('profile-link');

main.style.display = 'none'

const request = async() => {
    let username = searchInput.value
        try{
            const response = await axios.get(APIURL+username)
            const usuario = response.data;
            main.style.display = 'block'
            avatar.src=usuario.avatar_url;
            name.innerHTML = usuario.login;
            followers.innerHTML = usuario.followers + " FOLLOWERS";
            repos.innerHTML = usuario.public_repos + " REPOSITORIES";
            profileLink.innerHTML = usuario.html_url

            
        }catch(error){
            console.log(error)
        }
}

searchInput.addEventListener('input',request)
