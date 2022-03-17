
let tek = new Tek({
    separator: ',,',
    animationSpeed: 50
});

tek.el('.el');
tek.el('.el2', ["Hello", "World"], {
    writeSpeed: 50,
    colors: ["red", "#fd1", "rgb(255, 106, 47)", "hsl(90deg 73% 84%)"],
    hideMode: "fadeOut",
    colorMode: "fade",
    delay: 2000,
    loop: false
});

tek.getAll().then(items => {
    for(item_id in items){
        tek.run(item_id);
    }
});