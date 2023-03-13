const heroList = document.getElementById('hero-list')

fetch(`https://raw.githubusercontent.com/kronusme/dota2-api/master/data/heroes.json`)
.then(result => result.json())
.then((data) => {
  console.log(data.heroes)
  for (let i = 0; i < data.heroes.length; i++){
    const hero = data.heroes[i]

    const row = heroList.insertRow()

    const idCell = row.insertCell()
    idCell.textContent = hero.id

    const nameCell = row.insertCell()
    nameCell.textContent = hero.localized_name
  }
})
