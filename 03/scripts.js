(function ($) {

    //just to make a clock work ------ works
    setInterval(function () {
        function rad(strelka, rotate) {
            //rotation depending on center point (602 311)
            strelka.setAttribute('transform', 'rotate(' + rotate + ' 602 311)');
        };
        var da = new Date();
        //rotation intervals for all
        rad(seconds, da.getSeconds() * 6);
        rad(minutes, da.getMinutes() * 6);
        rad(hours, (da.getHours() % 12) * 30 + da.getMinutes() / 2);
        //console.log(da);
    }, 1000);


    //	 	display 'scroll' word ---------------works
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.querySelector('.scrolls').style.opacity = '1';
        }, 30000);
    });

    //   	grow cups on clock click ------------works
    window.addEventListener('load', function () {
        var element = document.querySelector('.clocks');
        var grows = document.querySelector('.cups');
        element.addEventListener('click', function () {
            console.log('clicked');
            //new class changes srokedashoffset
            grows.classList.add('new');
            //show and hide words
            //timeouts should be improved (separated in another function)--
            setTimeout(function () {
                document.querySelector('.clicks').style.opacity = '0';
                document.querySelector('.clocks').style.opacity = '0';
                document.querySelector('.clicks').style.visibility = 'hidden';
                document.querySelector('.clocks').style.visibility = 'hidden';
            }, 1000);
            setTimeout(function () {
                document.querySelector('.checks').style.opacity = '1';
                document.querySelector('.cupss').style.opacity = '1';
            }, 11000);
            setTimeout(function () {
                document.querySelector('.checks').style.opacity = '0';
                document.querySelector('.cupss').style.opacity = '0';
            }, 22000);
            setTimeout(function () {
                document.querySelector('.colorrange').style.opacity = '1';
            }, 25000);
        });
    });

    //		grow on scroll ---------------------works
    window.addEventListener('load', function () {
        var mypaths = document.querySelectorAll('.newb path');
        [].forEach.call(mypaths, function (mypath) {// for each path in this group
            var path_length = mypath.getTotalLength();//get length of path
            var path_style = getComputedStyle(mypath);
            mypath.style.strokeDasharray = path_length;//set dasharray and dashoffset to length of path
            mypath.style.strokeDashoffset = path_length;
            window.addEventListener('scroll', function (e) {
                var body = document.body;
                var element = document.documentElement;
                var scroll_percentage = (body.scrollTop + element.scrollTop) / (element.scrollHeight - element.clientHeight);//calculate percentage of scroll using body and element and input through scroll
                var draw = path_length * scroll_percentage; //length of drawn path
                mypath.style.strokeDashoffset = path_length - draw;//set length of drawn pass to dashofset
                console.log(scroll_percentage);
                setTimeout(function () {
                    document.querySelector('.scrolls').style.opacity = '0';
                }, 5000);
                setTimeout(function () {
                    document.querySelector('.clicks').style.opacity = '1';
                    document.querySelector('.clocks').style.opacity = '1';
                }, 6000);
                if (scroll_percentage == 0.9) {
                    // setTimeout(function(){
                    // 	document.querySelector('.clicks').style.opacity = '1';
                    // 	document.querySelector('.clocks').style.opacity = '1';
                    // }, 6000);
                };
            });
        });
    });

    //   	to change color on range change ---- works
    window.addEventListener('load', function () {
        var slide = document.querySelector('section').appendChild(document.createElement('input'));
        slide.setAttribute('type', 'range');
        slide.setAttribute('class', 'colorrange');
        slide.setAttribute('transition', '2s');
        slide.addEventListener('change', changePathColor);
        //add button that will activate 'change color with timeInterval'
        //var start = document.querySelector('section').appendChild(document.createElement('button'));
        //console.log(paths);
    });

    //   	change separate paths' colors ------------works
    function changePathColor() {
        var paths = document.querySelectorAll('path');
        [].forEach.call(paths, function (path) {
            path.style.stroke = randomRGBColor();
        });
        //change background too.........
        // var body = document.querySelector('body');
        // body.background = 'linear-gradient( to bottom,' + randomRGBColor() +',' + randomRGBColor();
    };
    //	  	RGB --------------------------works
    function randomRgb() {
        return Math.round(Math.random() * 255);
    }
    function randomRGBColor() {
        return 'rgb(' + randomRgb() + ', ' + randomRgb() + ', ' + randomRgb() + ')';
    }

    //....................bring scroll up
    window.addEventListener('load', function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
            console.log('scrolled up!!');
        }, 10);
    });


    //   to show info/div/tooltip on mouseover --------------almost there
    window.addEventListener('load', function () {
        var inf = document.querySelector('svg').appendChild(document.createElement('div'));//create div
        inf.className = 'info';//add style to created div
        var cups = document.querySelector('.cups');
        console.log(cups);
        console.log(inf);
        [].forEach.call(cups, function (cup) {
            cup.addEventListener('mouseover', showInfo);
            console.log(cups);
        });
    });

    function showInfo(e) {
        var inf = document.querySelector('.info');
        console.log(inf);
        inf.setAttribute('x', e.clientX + 11);
        inf.setAttribute('y', e.clientY + 27);
        inf.textContent = infos[i].title + infos[i].subtitle + infos[i].content;///----?
        inf.setAttribute('visibility', 'visible');
    }

    var infos = [
        {
            "title": "AAAA",
            "subtitle": "aaaa",
            "content": "asasasasas"
        },
        {
            "title": "BBBB",
            "subtitle": "bbbb",
            "content": "bnbnbnbn"
        },
        {
            "title": "CCCC",
            "subtitle": "cccc",
            "content": "cvcvcvcv"
        },
        {
            "title": "DDDD",
            "subtitle": "dddd",
            "content": "dfdfdfdf"
        },
        {
            "title": "EEEE",
            "subtitle": "eeee",
            "content": "erererer"
        },
        {
            "title": "FFFF",
            "subtitle": "ffff",
            "content": "fgfgfgfg"
        }
    ];



})(jQuery);
