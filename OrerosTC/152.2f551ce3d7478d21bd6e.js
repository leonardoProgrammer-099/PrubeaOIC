(self.webpackChunkoreros_tc=self.webpackChunkoreros_tc||[]).push([[152],{2152:(n,e,o)=>{"use strict";o.r(e),o.d(e,{ModuloModule:()=>P});var i=o(1116),t=o(2852),r=o(6304),c=o(5366),a=o(4093);let d=(()=>{class n{constructor(n){this.firebase=n,this.idDireccion="",this.idUser="",this.direccionDto={}}ngOnInit(){var n=this;return(0,r.Z)(function*(){console.log("ID Direccion",n.idDireccion,"IDU",n.idUser),(yield n.firebase.obtenerDireccionPredeterminada(n.idDireccion,n.idUser)).subscribe(e=>{n.direccionDto=e.data()})})()}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(a.C))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-direccion"]],inputs:{idDireccion:"idDireccion",idUser:"idUser"},decls:2,vars:2,template:function(n,e){1&n&&(c.TgZ(0,"label"),c._uU(1),c.qZA()),2&n&&(c.xp6(1),c.AsE("",e.direccionDto.municipio," ,",e.direccionDto.estado,""))},styles:["label[_ngcontent-%COMP%]{color:#fff}"]}),n})();var s=o(6309);function g(n,e){if(1&n&&(c.TgZ(0,"div"),c.TgZ(1,"h1",4),c._uU(2,"Ubicaci\xf3n"),c.qZA(),c._UZ(3,"app-direccion",16),c.qZA()),2&n){const n=c.oxw();c.xp6(3),c.Q6J("idDireccion",n.direccioPre.id)("idUser",n.idu)}}function p(n,e){if(1&n&&(c.TgZ(0,"b"),c._uU(1),c.qZA()),2&n){const n=c.oxw();c.xp6(1),c.hij("(",n.comentariosUser.length,")")}}function l(n,e){1&n&&(c.TgZ(0,"div",17),c.TgZ(1,"label",18),c._uU(2,"Por el momento no tiene opiniones este vendedor "),c._UZ(3,"i",19),c.qZA(),c.qZA())}function u(n,e){if(1&n&&(c.TgZ(0,"div",22),c.TgZ(1,"label",23),c._uU(2),c.qZA(),c._UZ(3,"br"),c.TgZ(4,"label",5),c._uU(5),c.qZA(),c.qZA()),2&n){const n=e.$implicit;c.xp6(2),c.Oqu(n.calificacion),c.xp6(3),c.AsE("",n.comentario," - ",n.fecha,"")}}function f(n,e){if(1&n&&(c.TgZ(0,"div",20),c.YNc(1,u,6,3,"div",21),c.qZA()),2&n){const n=c.oxw();c.xp6(1),c.Q6J("ngForOf",n.comentariosUser)}}function x(n,e){1&n&&(c.TgZ(0,"label",37),c._uU(1,"GRAN OFERTA"),c.qZA())}function h(n,e){if(1&n&&(c.TgZ(0,"div",38),c.TgZ(1,"label",39),c.TgZ(2,"del"),c._uU(3),c.ALo(4,"currency"),c.qZA(),c.qZA(),c.qZA()),2&n){const n=c.oxw().$implicit;c.xp6(3),c.hij("",c.xi3(4,1,n.precio,"MXN")," ")}}function m(n,e){if(1&n&&(c.TgZ(0,"label",40),c._uU(1),c.qZA()),2&n){const n=c.oxw().$implicit;c.xp6(1),c.hij("",n.descuento,"% OFF")}}function b(n,e){if(1&n&&(c.TgZ(0,"div",24),c._UZ(1,"app-favorite",25),c.TgZ(2,"div",26),c._UZ(3,"img",27),c._UZ(4,"img",27),c._UZ(5,"img",27),c._UZ(6,"img",27),c.qZA(),c.TgZ(7,"div",28),c._UZ(8,"hr"),c.YNc(9,x,2,0,"label",29),c.YNc(10,h,5,4,"div",30),c.TgZ(11,"label",31),c.TgZ(12,"b"),c._uU(13),c.ALo(14,"currency"),c.qZA(),c.qZA(),c.YNc(15,m,2,1,"label",32),c.TgZ(16,"label",33),c.TgZ(17,"b"),c._uU(18),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"div",34),c.TgZ(20,"p",35),c._uU(21),c.qZA(),c._UZ(22,"hr"),c.TgZ(23,"a",36),c._uU(24," Ver Detalles"),c.qZA(),c.qZA(),c.qZA()),2&n){const n=e.$implicit;c.xp6(1),c.Q6J("idp",n.id)("IdVendedor",n.idUsaurio),c.xp6(2),c.s9C("src",n.imagen1,c.LSH),c.xp6(1),c.s9C("src",n.imagen2,c.LSH),c.xp6(1),c.s9C("src",n.imagen3,c.LSH),c.xp6(1),c.s9C("src",n.imagen4,c.LSH),c.xp6(3),c.Q6J("ngIf",n.oferta),c.xp6(1),c.Q6J("ngIf",n.oferta),c.xp6(1),c.s9C("for",n.precio),c.xp6(2),c.hij("",c.xi3(14,14,n.precio-n.precio*(n.descuento/100),"MXN")," "),c.xp6(2),c.Q6J("ngIf",n.oferta),c.xp6(3),c.Oqu(n.tipoPrenda),c.xp6(3),c.Oqu(n.nombre),c.xp6(2),c.MGl("routerLink","/DetalleProducto/",n.id,"")}}const _=[{path:"",component:(()=>{class n{constructor(n,e,o){this.router=n,this.firebase=e,this.route=o,this.idu="",this.direccioPre={},this.datosUsuario={},this.datosProdutos=[],this.muestraDireccion=!1,this.comentariosUser=[]}ngOnInit(){var n=this;return(0,r.Z)(function*(){n.idu=n.route.snapshot.params.idu,n.firebase.getAuth().subscribe(function(){var e=(0,r.Z)(function*(e){if((null==e?void 0:e.uid)==n.idu)n.router.navigate(["/Miperfil"]);else{(yield n.firebase.obtenerDireccionPredetermianda(n.idu)).subscribe(e=>{n.direccioPre=e.data(),console.log(n.direccioPre,"ID DESDE padre"),n.muestraDireccion=!0});const e=n.firebase.ObtenerCollectionUsuario(n.idu);(yield e).subscribe(function(){var e=(0,r.Z)(function*(e){n.datosUsuario=e.data(),yield(yield n.firebase.ObtenerProductosParaUsuario(n.idu)).subscribe(e=>{n.datosProdutos=e})});return function(n){return e.apply(this,arguments)}}()),yield(yield n.firebase.ObtenerOpinionesVendedor(n.idu)).subscribe(e=>{n.comentariosUser=e})}});return function(n){return e.apply(this,arguments)}}())})()}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(t.F0),c.Y36(a.C),c.Y36(t.gz))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-perfil-usuario"]],decls:28,vars:8,consts:[[1,"contenedor"],[1,"sub-contenedor"],[1,"informacionUser"],["alt","",1,"",3,"src"],[1,"text-gold"],["for",""],[1,"text-body"],["for","",2,"font-size","18px","color","#999"],[1,"vr","text-white"],[4,"ngIf"],[1,"rese\xf1as"],["class","sinOpiniones",4,"ngIf"],["class","Opiniones",4,"ngIf"],[1,"productos"],[1,"listadoProductos"],["class","cartaProductos",4,"ngFor","ngForOf"],[3,"idDireccion","idUser"],[1,"sinOpiniones"],[1,""],[1,"fa-solid","fa-face-frown"],[1,"Opiniones"],["class","targeta_comentarios",4,"ngFor","ngForOf"],[1,"targeta_comentarios"],["for","",1,"text-comentario1","text-gold"],[1,"cartaProductos"],[1,"ButtonFav",3,"idp","IdVendedor"],[1,"header_card"],["alt","",3,"src"],[1,"body_card"],["class","AnunciadoOferta",4,"ngIf"],["class","tachado_Precio",4,"ngIf"],[2,"font-size","20px",3,"for"],["for","oferta en descuento","class","ml-3","style","color: rgb(15, 218, 42)","style","margin-left: 12px; color: rgb(43, 221, 67)",4,"ngIf"],["for","",1,"col-12",2,"color","#999"],[1,"footer_card"],[2,"color","#999"],[1,"btn","btn-warning","center",3,"routerLink"],[1,"AnunciadoOferta"],[1,"tachado_Precio"],["for","",2,"color","rgb(197, 197, 197)"],["for","oferta en descuento",1,"ml-3",2,"margin-left","12px","color","rgb(43, 221, 67)"]],template:function(n,e){1&n&&(c.TgZ(0,"article"),c.TgZ(1,"div",0),c.TgZ(2,"div",1),c.TgZ(3,"div",2),c._UZ(4,"img",3),c.TgZ(5,"p",4),c.TgZ(6,"label",5),c._uU(7),c.qZA(),c.qZA(),c.TgZ(8,"div",6),c.TgZ(9,"div"),c.TgZ(10,"h1",4),c._uU(11,"Ventas"),c.qZA(),c.TgZ(12,"label",7),c._uU(13," Tiene 0 ventas"),c.qZA(),c.qZA(),c._UZ(14,"div",8),c.YNc(15,g,4,2,"div",9),c.qZA(),c.qZA(),c.TgZ(16,"div",10),c.TgZ(17,"h2",4),c._uU(18,"Opinones de los compradores "),c.YNc(19,p,2,1,"b",9),c.qZA(),c.YNc(20,l,4,0,"div",11),c.YNc(21,f,2,1,"div",12),c.qZA(),c.qZA(),c.TgZ(22,"div",13),c.TgZ(23,"h1",4),c.TgZ(24,"b"),c._uU(25,"M\xe1s publicaciones del vendedor"),c.qZA(),c.qZA(),c.TgZ(26,"div",14),c.YNc(27,b,25,17,"div",15),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(4),c.s9C("src",e.datosUsuario.perfilUsuarioSrc,c.LSH),c.xp6(3),c.AsE("",e.datosUsuario.nombre," ",e.datosUsuario.PrimerApellido,""),c.xp6(8),c.Q6J("ngIf",e.muestraDireccion),c.xp6(4),c.Q6J("ngIf",e.comentariosUser.length>0),c.xp6(1),c.Q6J("ngIf",e.comentariosUser.length<=0),c.xp6(1),c.Q6J("ngIf",e.comentariosUser.length>0),c.xp6(6),c.Q6J("ngForOf",e.datosProdutos))},directives:[i.O5,i.sg,d,s.X,t.yS],pipes:[i.H9],styles:["article[_ngcontent-%COMP%]{height:100%;background-color:#1b1b1f}.contenedor[_ngcontent-%COMP%], article[_ngcontent-%COMP%]{width:100%}.sub-contenedor[_ngcontent-%COMP%]{display:grid;grid-template-columns:30% 70%}.informacionUser[_ngcontent-%COMP%]{padding-top:20px;width:100%;display:flex;flex-direction:column;align-items:center;grid-gap:10px;gap:10px}.rese\xf1as[_ngcontent-%COMP%]{width:95%;padding:20px;background-color:#18181a;border-radius:10px}.informacionUser[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;border-radius:20px;box-shadow:4px 4px 10px #000}.informacionUser[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding:10px;color:#fff;font-size:28px}.text-body[_ngcontent-%COMP%]{display:flex;color:#fff;justify-content:center;align-items:center;grid-gap:10px;gap:10px}.productos[_ngcontent-%COMP%]{width:100%;height:auto;padding:10px;color:gold}.productos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:gold;text-align:center;padding:20px}.listadoProductos[_ngcontent-%COMP%]{width:98%;height:auto;background-color:#28282b;padding:10px;color:#fff;border-radius:10px}.ContenedorVendedores[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#18181a;padding:10px;color:gold}.subContenedorSin[_ngcontent-%COMP%]{width:100%;height:300px;background-color:#28282b;padding:10px;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:10px}.subContenedorSin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px}.listadoProductos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,25%);grid-gap:10px;gap:10px}.cartaProductos[_ngcontent-%COMP%]{width:100%;max-height:315px;background-color:#fff;overflow:hidden;border-radius:10px;color:#000;transition:all .4s;position:relative}.cartaProductos[_ngcontent-%COMP%]:hover{max-height:520px;transition:max-height .25s ease-in;box-shadow:4px 4px 10px #000}.header_card[_ngcontent-%COMP%]{width:100%;height:175px;display:flex;justify-content:center;align-items:center;margin-left:320px;animation:miniCarruzel 16s infinite}@keyframes miniCarruzel{0%{margin-left:320px}12.5%{margin-left:110px}25%{margin-left:-80px}37.5%{margin-left:-280px}50%{margin-left:-80px}62.5%{margin-left:110px}75%{margin-left:320px}}.header_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60%;padding:10px;margin:10px 40px 0 10px;box-shadow:2px 2px 5px #999;border-radius:10px}.body_card[_ngcontent-%COMP%]{padding:10px;transition:all .4s}.tachado_Precio[_ngcontent-%COMP%]{overflow:hidden;height:0;transition:all .4s}.cartaProductos[_ngcontent-%COMP%]:hover > .body_card[_ngcontent-%COMP%]   .tachado_Precio[_ngcontent-%COMP%]{transition:all .3s;height:20px}.footer_card[_ngcontent-%COMP%]{padding:10px;overflow:hidden;height:auto;visibility:hidden}.cartaProductos[_ngcontent-%COMP%]:hover > .footer_card[_ngcontent-%COMP%]{visibility:visible}.ButtonFav[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;font-size:28px;color:gold;opacity:.8}.AnunciadoOferta[_ngcontent-%COMP%]{color:#fff;padding:5px;margin:5px;background-color:#2b2bb6;border-radius:10px}.sinOpiniones[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;justify-content:center;align-items:center}.sinOpiniones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;font-size:22px}.Opiniones[_ngcontent-%COMP%]{width:100%;padding:10px;height:100%;overflow:scroll;scrollbar-width:none}.Opiniones[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.targeta_comentarios[_ngcontent-%COMP%]{width:100%;color:#fff}.text-comentario1[_ngcontent-%COMP%]{font-size:20px}@media screen and (max-width:1073px){article[_ngcontent-%COMP%]{padding-top:20px}}@media screen and (max-width:891px){.sub-contenedor[_ngcontent-%COMP%]{display:grid;grid-template-columns:100%}.informacionUser[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30%;border-radius:20px;box-shadow:4px 4px 10px #000}.rese\xf1as[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.listadoProductos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,33%);grid-gap:10px;gap:10px}}@media screen and (max-width:802px){.listadoProductos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,50%);grid-gap:10px;gap:10px}}@media screen and (max-width:520px){.listadoProductos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,50%);grid-gap:10px;gap:10px}.cartaProductos[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[t.Bz.forChild(_)],t.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[i.ez,Z]]}),n})()}}]);