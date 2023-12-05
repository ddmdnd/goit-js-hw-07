const gallaryClass = document.querySelector(".gallery");
const images = [
    {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    },
    {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    },
    {
    url:
    'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
    },
    {
    url:
    'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
    },
    {
    url:
    'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
    },
    ];
    const gallaryOne = images.forEach(element => {
        const li = `<li type="none" class="list-item new"><img width="360" height="300" src="${element.url}" alt="${element.alt}"/></li>`;
        gallaryClass.insertAdjacentHTML("afterbegin", li);
    });
    const li = gallaryClass.querySelector(".new");
    li.style.display = "flex";
    console.log(li);
    gallaryClass.style.display = "flex";
    gallaryClass.style.flexWrap = "wrap";
    gallaryClass.style.flexDirection = "column";
    gallaryClass.style.justifyContent = "center";
    gallaryClass.style.alignItems = "flex-start";
    gallaryClass.style.gap = "48px 24px";
    gallaryClass.style.width = "1128px";
    gallaryClass.style.height = "648px";
    gallaryClass.style.padding = "100px 156px";
    gallaryClass.style.background = "#FFF";



