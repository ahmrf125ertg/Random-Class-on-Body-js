
const classList = ["class-one","class-two", "class-three", "class-four"],

randomKey = Math.floor(Math.random() * classList.length);

document.body.setAttribute('class', classList[randomKey]);


// ممكن تعمل مليون فكره زي صور وحاجات تانية كتير
