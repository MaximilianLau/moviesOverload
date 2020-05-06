(this["webpackJsonpmaximilian-lau-project-five"]=this["webpackJsonpmaximilian-lau-project-five"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logoTop.43aea44b.png"},22:function(e,t,a){e.exports=a.p+"static/media/logoBottom.a7beb6b7.png"},25:function(e,t,a){e.exports=a(53)},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),c=a(3),m=a(4),o=a(6),s=a(5),u=a(21),g=a.n(u),p=a(22),d=a.n(p),v=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"wrapper"},r.a.createElement("div",{className:"headerLogo"},r.a.createElement("img",{src:g.a,className:"diyLogoTop",alt:"top half logo, Overload"}),r.a.createElement("img",{src:d.a,alt:"bottom half of the logo, Overload"})),r.a.createElement("h1",{className:"headerGlow",tabindex:"0"},r.a.createElement("span",null,"m"),"OV",r.a.createElement("span",null,"i"),"ERLOAD"),r.a.createElement("p",null,"movie rating aggregator"))}}]),a}(n.Component);var h=function(){return r.a.createElement("footer",{className:"wrapper"},r.a.createElement("p",null,"\xa9 2020 ",r.a.createElement("a",{href:"http://maximilianlau.com",target:"_blank",rel:"noopener noreferrer"},"Maximilian Lau.")),r.a.createElement("p",null,"Powered by React, The Movies DB, and OMDB"))},E=a(8),f=a.n(E);var b=function(e){return void 0===e.rating[0]?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"IMDB Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"IMDB Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:10*e.rating[0].Value.substring(0,3)})),r.a.createElement("h4",{className:"ratingScore"},e.rating[0].Value.substring(0,3)))};var N=function(e){return void 0===e.rating[0]?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"RT Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"RT Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:e.rating[0].Value.replace("%","")})),r.a.createElement("h4",{className:"ratingScore"},e.rating[0].Value.replace("%","")/10))};var y=function(e){return void 0===e.rating[0]?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"Metacritic Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"Metacritic Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:e.rating[0].Value.substring(0,2)})),r.a.createElement("h4",{className:"ratingScore"},e.rating[0].Value.substring(0,2)/10))};var R=function(e){var t=e.imdbRating.map((function(t){return e.imdbRating[0].Value.substring(0,3)})),a=[parseFloat(t[0]),e.rtRating.map((function(t){return e.rtRating[0].Value.replace("%","")/10}))[0],e.mtRating.map((function(t){return e.mtRating[0].Value.substring(0,2)/10}))[0],e.tmdbRating].filter((function(e){return e})),n=(a.reduce((function(e,t){return e+t}),0)/a.length).toFixed(1);return n>=7?r.a.createElement("div",{className:"aggregate green"},r.a.createElement("h3",{tabindex:"0"},n)):n>=3.5&&n<7?r.a.createElement("div",{className:"aggregate orange"},r.a.createElement("h3",{tabindex:"0"},n)):n>3.5||n?r.a.createElement("div",{className:"aggregate red"},r.a.createElement("h3",{tabindex:"0"},n)):void 0},O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ratingsArray:[],imDB:[],rottenTomatoes:[],metaCritic:[],tmdb:e.tmDBRating},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://www.omdbapi.com/?apikey=accc0453&t=".concat(this.props.moreRatings);f()({method:"GET",url:t,dataType:"json"}).then((function(t){var a=t.data.Ratings;if(e.setState({ratingsArray:t.data.Ratings,year:t.Year}),void 0!==a){var n=a.filter((function(e){return"Internet Movie Database"===e.Source})),r=a.filter((function(e){return"Rotten Tomatoes"===e.Source})),i=a.filter((function(e){return"Metacritic"===e.Source}));e.setState({imDB:n,rottenTomatoes:r,metaCritic:i})}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{rating:this.state.imDB}),r.a.createElement(N,{rating:this.state.rottenTomatoes}),r.a.createElement(y,{rating:this.state.metaCritic}),r.a.createElement(R,{imdbRating:this.state.imDB,rtRating:this.state.rottenTomatoes,mtRating:this.state.metaCritic,tmdbRating:this.state.tmdb}))}}]),a}(n.Component);var S=function(e){return null===e.image?r.a.createElement("div",null,r.a.createElement("img",{className:"imageResult",src:"https://via.placeholder.com/500x281.jpg/313131/808080?text=TOO+BAD+SO+SAD+No-Images-Available",alt:"Placeholder "})):r.a.createElement("div",null,r.a.createElement("img",{className:"imageResult",src:"https://image.tmdb.org/t/p/w500/".concat(e.image),alt:e.title}))};var j=function(e){return void 0===e.rating||0===e.rating?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"MoviesDB Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"MoviesDB Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:10*e.rating})),r.a.createElement("h4",{className:"ratingScore"},e.rating))};var x=function(e){return r.a.createElement("div",{className:"popularityWrapper"},r.a.createElement("p",null,"Popularity:"),r.a.createElement("h4",{className:"popularityScore"},e.popularity))},w=a(24),D=a(23),B=a.n(D);var T=function(e){var t=[];e.genre.map((function(a){return e.genreIndex.genres.map((function(e){return a===e.id&&t.push(e.name),null})),null}));var a=t.join(", ");return r.a.createElement("div",null,r.a.createElement("h5",{className:"genreType"},a))},k=a(10),A=(a(51),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),e.setState({userSubmit:e.state.userInput}),""!==e.state.userInput&&e.setState({userInput:""},(function(){return e.performSearch()}))},e.performSearch=function(){var t="https://api.themoviedb.org/3/search/movie?api_key=4e34e370c74f17cdb9f681afc05efa93&query=".concat(e.state.userSubmit,"&page=1");f()({method:"GET",url:t,dataType:"json"}).then((function(t){0===t.data.total_results?k.b.error("No results found for your query",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,className:"toast-alert"}):e.setState({moviesArray:t.data.results})}))},e.handleUserInput=function(t){e.setState({userInput:t.target.value})},e.state={userInput:"",userSubmit:"",moviesArray:[],genreArray:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;f()({method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list?api_key=4e34e370c74f17cdb9f681afc05efa93&language=en-US",dataType:"json"}).then((function(t){e.setState({genreArray:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"movieName",className:"visuallyHidden"},"enter movie name:"),r.a.createElement("input",{type:"text",id:"movieName",name:"movieName",placeholder:"OVER here!",value:this.state.userInput,onChange:this.handleUserInput}),r.a.createElement("button",{type:"submit",id:"movieButton"},r.a.createElement(w.a,null)))),r.a.createElement(k.a,null),r.a.createElement("ul",{className:"movieResults"},this.state.moviesArray.map((function(t){return r.a.createElement(B.a,{bottom:!0,key:t.id},r.a.createElement("li",{className:"movieEach"},r.a.createElement(S,{image:t.backdrop_path,title:t.original_title}),r.a.createElement("div",null,r.a.createElement("h2",{tabindex:"0"},t.original_title.toUpperCase(),"(",void 0===t.release_date?r.a.createElement("p",null,"N/A"):t.release_date.substring(0,4),") "),r.a.createElement(T,{genre:t.genre_ids,genreIndex:e.state.genreArray}),r.a.createElement(x,{popularity:t.popularity}),r.a.createElement(j,{rating:t.vote_average}),r.a.createElement(O,{moreRatings:t.original_title,tmDBRating:t.vote_average}))))}))))}}]),a}(n.Component)),I=(a(52),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(A,null),r.a.createElement(h,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.9d64e263.chunk.js.map