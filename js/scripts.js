// Dictionnaire de pages utilisé pour l'alternative linguistique
const pagesDictionary = {
    "suggerer-lieu": {
        fr: "../fr/suggerer-lieu.html",
        en: "../en/suggest-location.html",
    },
    "a-propos": {
        fr: "../fr/a-propos.html",
        en: "../en/about-us.html",
    },
    "page-principale": {
        fr: "../fr/index.html",
        en: "../en/index.html",
    },
};

function setAltLanguageLink() {
    console.log('set alt language link.');
    let language, altLanguage, idPage, url, altLangLienEl;
    altLangLienEl = document.getElementById('alt-linguistique');
    console.log('altLangLienEl', altLangLienEl);
    language = document.getElementsByTagName('html')[0].getAttribute('lang');
    if (language === 'fr') {
        altLanguage = 'en';
    } else {
        altLanguage = 'fr';
    }
    console.log('altLanguage: ', altLanguage);
    idPage = altLangLienEl.dataset.locationId;
    console.log('idPage: ', idPage);
    url = pagesDictionary[idPage][altLanguage];
    altLangLienEl.href = url;

}

function initEvents() {
    let view1 = document.getElementById('view-button1');
    let descriptionEl1 = document.getElementById('description1');
    let close1 = document.getElementById('close-button1');
    let view2 = document.getElementById('view-button2');
    let descriptionEl2 = document.getElementById('description2');
    let close2 = document.getElementById('close-button2');
    let view3 = document.getElementById('view-button3');
    let descriptionEl3 = document.getElementById('description3');
    let close3 = document.getElementById('close-button3');

    close1.style.display = 'none';
    descriptionEl1.style.display = 'none';
    close2.style.display = 'none';
    descriptionEl2.style.display = 'none';
    close3.style.display = 'none';
    descriptionEl3.style.display = 'none';

    let open = () => {
        descriptionEl1.style.display = 'block';
        close1.style.display = 'block';
        view1.style.display = 'none';
        descriptionEl2.style.display = 'block';
        close2.style.display = 'block';
        view2.style.display = 'none';
        descriptionEl3.style.display = 'block';
        close3.style.display = 'block';
        view3.style.display = 'none';
    }

    let hide = () => {
        descriptionEl1.style.display = 'none';
        close1.style.display = 'none';
        view1.style.display = 'block';
        descriptionEl2.style.display = 'none';
        close2.style.display = 'none';
        view2.style.display = 'block';
        descriptionEl3.style.display = 'none';
        close3.style.display = 'none';
        view3.style.display = 'block';
    }

    view1.addEventListener('click', open);
    close1.addEventListener('click', hide);
    view2.addEventListener('click', open);
    close2.addEventListener('click', hide);
    view3.addEventListener('click', open);
    close3.addEventListener('click', hide);
}

function putSwiperCarrousel() {
    let swiper;
    const nSlides = document.querySelectorAll('.swiper-slide').length;
    function aleaEntreSlides(nSlides) {
        // retourne un nombre aléatoire entre bMin et bMax inclusivement
        return Math.floor((nSlides) * Math.random());
    }
        swiper = new Swiper(".swiper", {
            // Optional parameters
            direction: "horizontal",
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            initialSlide: aleaEntreSlides(nSlides)
        });
}

function putMediaElement() {
    let audioList, audio, i;
    audioList = document.getElementsByTagName('audio');
    for (i = 0; i < audioList.length; i++) {
        audio = audioList[i];
        new MediaElementPlayer(audio, {
            iconSprite: "../node_modules/mediaelement/build/mejs-controls.svg",
            stretching: 'auto',
        });
    }
}

function decorateLabels() {
    let i, controlEl, label, labels;
    labels = document.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++) {
        label = labels[i];
        if (label.htmlFor) {
            controlEl = document.getElementById(label.htmlFor);
            if (controlEl && controlEl.required) {
                label.classList.add("required");
            }
        }
    }
}

window.onload = () => {
    setAltLanguageLink();
    initEvents();
    putSwiperCarrousel()
    putMediaElement()
    decorateLabels();
}