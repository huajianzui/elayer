var gmaskobj={ 
        mask:'',
        init:function(title,content,callback){
            title=title?title:"标题";
            content=content?content:"内容";
            this.addHtml(title,content);
            this.addCss();
            this.bind();
            if(callback){
                this.callback=callback;
            }                 
        },
        callback:function(param){
            console.log(param);
        },
        addHtml:function(title,content){
            var mask=document.createElement("div");
            mask.id="gmask";
            mask.innerHTML=
            '<div class="gwindow">'+
                    '<div class="header">'+
                        '<span class="title">'+title+'</span>'+
                        '<span class="close">×</span>'+
                    '</div>'+
                    '<div class="content">'+
                    '<span class="content-p">'+content+'</span>'+
                    '</div>'+
                    '<div class="footer">'+
                        '<button type="button" class="cancel-btn btn">取消</button>'+
                        '<button type="button" class="ok-btn btn">确定</button>'+               
                    '</div>'+
                '</div>';
            document.body.appendChild(mask);
            this.mask=mask;
        },
        addCss:function(){
            var style=document.createElement("style");
            style.type="text/css";
            style.appendChild(document.createTextNode(
            'html,body{width:100%;height:100%;padding:0;margin:0;}'+
            '#gmask{position: absolute;top:0;left:0;right:0;bottom:0;z-index: 9999; background-color: rgba(0, 0, 0, 0.8);display:none}'+
            '.gwindow{background-color: white;border-radius: 5px;width:30%;margin:auto;margin-top:50vh;transform: translate(0,-50%);}'+
            '.header{ height:40px;line-height: 40px;width:100%;border-radius: 5px 5px 0 0;background-color: rgba(200,200,200, 0.8);}'+
            '.header .title{margin-left:5px;}'+
            '.header .close{color:#000;float:right;font-size: 40px;font-weight: 100; margin-top:-2px; margin-right: 5px;cursor: pointer;}'+
            '.footer{height:40px;width:100%;}'+
            '.footer .btn{ margin-right:10px;padding:5px 10px;border:none;border-radius: 5px;float: right;outline:none;}'+
            '.content{padding:20px;text-align: center;}'+
            '.content-p{text-indent: 2em;display: inline-block;text-align: left;}'+
            '.footer .ok-btn{ background-color:#40588c;cursor: pointer;}'+
            '.footer .cancel-btn{background-color:#b13b3b;cursor: pointer;}'));
            var head=document.getElementsByTagName("head")[0];
            head.appendChild(style);
        },
        show:function(){
            if(this.mask){
                this.mask.style.display="block";
            }else{
                this.init();
                this.mask.style.display="block";
            }
            
        },
        hide:function(){
            if(this.mask){
                this.mask.style.display="none";
            }else{
                this.init();
                this.mask.style.display="none";
            }
        },
        bind:function(){
            _that=this;
            var ok_btn=document.querySelector(".gwindow .ok-btn");
            var cancel_btn=document.querySelector(".gwindow .cancel-btn");
            var close_btn=document.querySelector(".gwindow .close");
            ok_btn.addEventListener("click",function(){
                _that.hide();
                _that.callback("ok");
            })
            cancel_btn.addEventListener("click",function(){
                _that.hide();
                _that.callback("cancel");
            })
            close_btn.addEventListener("click",function(){
                _that.hide();
                _that.callback("close");
            })
        },
        change:function(title,content,callback){
            var gtitle=document.querySelector(".gwindow .title");
            var gcontent_btn=document.querySelector(".gwindow .content-p");
            gtitle.innerHTML=title?title:gtitle.innerHTML;
            gcontent_btn.innerHTML=content?content:gcontent_btn.innerHTML;
            if(callback){
                this.callback=callback;
            }  
        }     
    }
