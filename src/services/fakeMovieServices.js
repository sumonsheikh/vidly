const movies=[
    {
        _id:"1",
        title:"Terminator",
        genre:{_id:"1",name:"Action"},
        numberInStock:7,
        dailyRentalRate:2.5,
        publishDate:"2018-03-02",
        liked:true
    },
    {
        _id:"2",
        title:"Die Hart",
        genre:{_id:"2",name:"Action"},
        numberInStock:6,
        dailyRentalRate:1.5,
        publishDate:"2018-04-02"
    },
    {
        _id:"3",
        title:"Avater",
        genre:{_id:"3",name:"Fantacy"},
        numberInStock:6,
        dailyRentalRate:1.5,
        publishDate:"2018-04-02"
    },
    {
        _id:"4",
        title:"The body",
        genre:{_id:"4",name:"Thriller"},
        numberInStock:8,
        dailyRentalRate:2.5,
        publishDate:"2019-04-02"
    },
    {
        _id:"5",
        title:"Mission Impossible",
        genre:{_id:"5",name:"Thriller"},
        numberInStock:6,
        dailyRentalRate:1.5,
        publishDate:"2018-04-02"
    },
    {
        _id:"6",
        title:"Tekken",
        genre:{_id:"6",name:"Action"},
        numberInStock:6,
        dailyRentalRate:1.5,
        publishDate:"2018-04-02"
    },
    {
        _id:"7",
        title:"Takken2",
        genre:{_id:"7",name:"Action"},
        numberInStock:6,
        dailyRentalRate:1.5,
        publishDate:"2018-04-02"
    },
    {
        _id:"8",
        title:"Memento",
        genre:{_id:"8",name:"Mystri"},
        numberInStock:6,
        dailyRentalRate:1.5,
        publishDate:"2018-04-02"
    },
    {
        _id:"9",
        title:"The Boss",
        genre:{_id:"9",name:"Action"},
        numberInStock:6,
        dailyRentalRate:1.5,
        publishDate:"2018-04-02"
    },
];
export function getMovies(){
    return movies;
}
export function getMovie(id){
    return movies.find(m=>m._id===id);
}