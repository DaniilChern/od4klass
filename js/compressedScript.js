const checkingName={titleName:["\u0426\u0435\u043B\u0438\u0449\u0435\u0432\u0430 \u0414\u0430\u0448\u0430","\u0428\u0430\u0440\u0430\u043F\u043E\u0432\u0430 \u0412\u0438\u043A\u0430","\u0422\u0438\u0442\u0435\u043D\u043A\u043E \u0421\u0430\u0448\u0430","\u041F\u043E\u043D\u043E\u043C\u0430\u0440\u0435\u0432 \u042F\u0440\u043E\u0441\u043B\u0430\u0432","\u0420\u0430\u0439\u0441\u043F\u0435\u0440 \u042F\u0440\u043E\u0441\u043B\u0430\u0432","\u0413\u0443\u043B\u044F\u0432\u0438\u043D\u0430 \u0410\u043B\u0435\u043D\u0430","\u041A\u0440\u0430\u0441\u043D\u043E\u0431\u0430\u0435\u0432\u0430 \u041A\u0430\u0442\u044F","\u041F\u043E\u043F\u043E\u0432\u0430 \u042F\u0441\u044F","\u041C\u043E\u0441\u043A\u0432\u0438\u043D\u0430 \u0421\u043E\u043D\u044F","\u0427\u0435\u0440\u043D\u0430\u0432\u0438\u043D\u0430 \u0421\u043E\u043D\u044F","\u042F\u043A\u043E\u0432\u043B\u0435\u0432\u0430 \u042E\u043B\u044F","\u041A\u0430\u0440\u043C\u0430\u043D\u043E\u0432 \u0410\u043D\u0434\u0440\u0435\u0439","\u0427\u0435\u0442\u0432\u0435\u0440\u0438\u043A\u043E\u0432 \u0418\u0432\u0430\u043D"]};let num1=checkingName.titleName[0],num2=checkingName.titleName[1],num3=checkingName.titleName[2],num4=checkingName.titleName[3],num5=checkingName.titleName[4],num6=checkingName.titleName[5],num7=checkingName.titleName[6],num8=checkingName.titleName[7],num9=checkingName.titleName[8],num10=checkingName.titleName[9],num11=checkingName.titleName[10],num12=checkingName.titleName[11],num13=checkingName.titleName[12];document.addEventListener("click",function(a){a.preventDefault();const b=a.target.dataset.name;"name1"===b?(play(num1),dragAndDrop()):"name2"===b?(play(num2),dragAndDrop()):"name3"===b?(play(num3),dragAndDrop()):"name4"===b?(play(num4),dragAndDrop()):"name5"===b?(play(num5),dragAndDrop()):"name6"===b?(play(num6),dragAndDrop()):"name7"===b?(play(num7),dragAndDrop()):"name8"===b?(play(num8),dragAndDrop()):"name9"===b?(play(num9),dragAndDrop()):"name10"===b?(play(num10),dragAndDrop()):"name11"===b?(play(num11),dragAndDrop()):"name12"===b?(play(num12),dragAndDrop()):"name13"===b&&(play(num13),dragAndDrop())});const play=function(a){a===num1?playingGame(num1,"images/img1-1.jpg","images/img1-2.jpg","images/img1-3.jpg","images/img1-4.jpg"):a===num2?playingGame(num2,"images/img2-1.jpg","images/img2-2.jpg","images/img2-3.jpg","images/img2-4.jpg"):a===num3?playingGame(num3,"images/img3-1.jpg","images/img3-2.jpg","images/img3-3.jpg","images/img3-4.jpg"):a===num4?playingGame(num4,"images/img4-1.jpg","images/img4-2.jpg","images/img4-3.jpg","images/img4-4.jpg"):a===num5?playingGame(num5,"images/img5-1.jpg","images/img5-2.jpg","images/img5-3.jpg","images/img5-4.jpg"):a===num6?playingGame(num6,"images/img6-1.jpg","images/img6-2.jpg","images/img6-3.jpg","images/img6-4.jpg"):a===num7?playingGame(num7,"images/img7-1.jpg","images/img7-2.jpg","images/img7-3.jpg","images/img7-4.jpg"):a===num8?playingGame(num8,"images/img8-1.jpg","images/img8-2.jpg","images/img8-3.jpg","images/img8-4.jpg"):a===num9?playingGame(num9,"images/img9-1.jpg","images/img9-2.jpg","images/img9-3.jpg","images/img9-4.jpg"):a===num10?playingGame(num10,"images/img10-1.jpg","images/img10-2.jpg","images/img10-3.jpg","images/img10-4.jpg"):a===num11?playingGame(num11,"images/img11-1.jpg","images/img11-2.jpg","images/img11-3.jpg","images/img11-4.jpg"):a===num12?playingGame(num12,"images/img12-1.jpg","images/img12-2.jpg","images/img12-3.jpg","images/img12-4.jpg"):a===num13&&playingGame(num13,"images/img13-1.jpg","images/img13-2.jpg","images/img13-3.jpg","images/img13-4.jpg")},playingGame=function(a,b,c,d,e){document.querySelector(".main-container").style="display:none";const f=document.createElement("div");return f.classList.add("container"),f.insertAdjacentHTML("afterbegin",`    
   <div class="container-grid1">
   <div class="container-grid1__part-photo"   >
      <img id="img1" class="part-photo js_part-photo" draggable='true'  src="images/img3-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img2" class="part-photo js_part-photo" draggable='true' src="images/img9-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img3" class="part-photo js_part-photo" draggable='true' src="images/img11-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img4" class="part-photo js_part-photo" draggable='true' src="images/img5-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img5" class="part-photo js_part-photo" draggable='true' src="images/img1-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img6" class="part-photo js_part-photo" draggable='true' src="images/img7-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img7" class="part-photo js_part-photo" draggable='true' src="images/img13-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img8" class="part-photo js_part-photo" draggable='true' src="images/img8-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img9" class="part-photo js_part-photo" draggable='true' src="images/img6-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img10" class="part-photo js_part-photo" draggable='true' src="images/img10-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img11" class="part-photo js_part-photo" draggable='true' src="images/img7-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img12" class="part-photo js_part-photo" draggable='true' src="images/img9-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img13" class="part-photo js_part-photo" draggable='true' src="images/img4-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img14" class="part-photo js_part-photo" draggable='true' src="images/img6-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img15" class="part-photo js_part-photo" draggable='true' src="images/img10-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img16" class="part-photo js_part-photo" draggable='true' src="images/img12-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img17" class="part-photo js_part-photo" draggable='true' src="images/img8-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img18" class="part-photo js_part-photo" draggable='true' src="images/img5-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img19" class="part-photo js_part-photo" draggable='true' src="images/img2-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img20" class="part-photo js_part-photo" draggable='true' src="images/img11-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img21" class="part-photo js_part-photo" draggable='true' src="images/img13-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img22" class="part-photo js_part-photo" draggable='true' src="images/img4-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img23" class="part-photo js_part-photo" draggable='true' src="images/img3-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img24" class="part-photo js_part-photo" draggable='true' src="images/img2-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img25" class="part-photo js_part-photo" draggable='true' src="images/img1-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img26" class="part-photo js_part-photo" draggable='true' src="images/img12-4.jpg" alt="">
   </div>
</div>
<div class="container-nogrid">
   <div class="congratulation">
      <p>Правильно !!!</p>
      <button id="playAgain" class="play-again" data-again="again">Сыграй еще раз</button>
      <div class="container-hovered" style="display:none"></div>
   </div>

   <div class="description-game">
      Собери <p class="span-name" > ${a} </p> из фрагментов просто перетаскивая их на нужное место
   </div>
   <div class="container-grid__photo">
      <div class="js__container-grid__photo-parts">
         <img class="js__empty-photo__parts"src=${b} alt="">
      </div>
      <div class="js__container-grid__photo-parts">
         <img class="js__empty-photo__parts"src=${c} alt="">
      </div>
      <div class="js__container-grid__photo-parts">
         <img class="js__empty-photo__parts"src=${d} alt="">
      </div>
      <div class="js__container-grid__photo-parts">
         <img class="js__empty-photo__parts"src=${e} alt="">
      </div>
   </div>
   <button id="btnOk" class="btn-ok" data-ok = "ok" style="display:none">Нажми если собрал</button>
</div>
<div class="container-grid2">
   <div class="container-grid1__part-photo">
      <img id="img27" class="part-photo js_part-photo" draggable='true' src="images/img3-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img28" class="part-photo js_part-photo" draggable='true' src="images/img8-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img29" class="part-photo js_part-photo" draggable='true' src="images/img12-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img30" class="part-photo js_part-photo" draggable='true' src="images/img13-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img31" class="part-photo js_part-photo" draggable='true' src="images/img9-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img32" class="part-photo js_part-photo" draggable='true' src="images/img10-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img33" class="part-photo js_part-photo" draggable='true' src="images/img6-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img34" class="part-photo js_part-photo" draggable='true' src="images/img4-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img35" class="part-photo js_part-photo" draggable='true' src="images/img5-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img36" class="part-photo js_part-photo" draggable='true' src="images/img1-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img37" class="part-photo js_part-photo" draggable='true' src="images/img7-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img38" class="part-photo js_part-photo" draggable='true' src="images/img13-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img39" class="part-photo js_part-photo" draggable='true' src="images/img6-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img40" class="part-photo js_part-photo" draggable='true' src="images/img10-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img41" class="part-photo js_part-photo" draggable='true' src="images/img2-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img42" class="part-photo js_part-photo" draggable='true' src="images/img11-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img43" class="part-photo js_part-photo" draggable='true' src="images/img8-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img44" class="part-photo js_part-photo" draggable='true' src="images/img4-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img45" class="part-photo js_part-photo" draggable='true' src="images/img9-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img46" class="part-photo js_part-photo" draggable='true' src="images/img12-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img47" class="part-photo js_part-photo" draggable='true' src="images/img5-4.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img48" class="part-photo js_part-photo" draggable='true' src="images/img2-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img49" class="part-photo js_part-photo" draggable='true' src="images/img7-1.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img50" class="part-photo js_part-photo" draggable='true' src="images/img1-3.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img51" class="part-photo js_part-photo" draggable='true' src="images/img3-2.jpg" alt="">
   </div>
   <div class="container-grid1__part-photo">
      <img id="img52" class="part-photo js_part-photo" draggable='true' src="images/img11-3.jpg" alt="">
   </div>
</div>
      `),document.body.appendChild(f),f},playOk=function(){document.querySelector(".congratulation").style="display:block"},playAgain=function(){window.location.reload()};document.addEventListener("click",function(a){a.preventDefault();const b=a.target.dataset.ok,c=a.target.dataset.again;"ok"===b?(setTimeout(playOk,500),document.getElementById("btnOk").style="display:none",document.querySelector(".container-hovered").style="display:block"):"again"===c&&playAgain()});function dragAndDrop(){const a=document.querySelectorAll(".js__empty-photo__parts");let b;const c=function(a){b=a.target,setTimeout(()=>{this.classList.add("hide")},0)},d=function(){this.classList.remove("hide")},e=function(a){a.preventDefault()},f=function(a){a.preventDefault(),this.classList.add("hovered")},g=function(){this.classList.remove("hovered")};let h=0;const j=function(){if(this.src===b.src&&(this.replaceWith(b),h++),4==h){document.getElementById("btnOk").style="display:block";let a=document.querySelectorAll(".js__container-grid__photo-parts");a.forEach(function(b){return b.classList.add("border-none"),a})}this.classList.remove("hovered")};a.forEach(a=>{a.addEventListener("dragover",e),a.addEventListener("dragenter",f),a.addEventListener("dragleave",g),a.addEventListener("drop",j)});const k=document.getElementById("img1");k.addEventListener("dragstart",c),k.addEventListener("dragend",d);const l=document.getElementById("img2");l.addEventListener("dragstart",c),l.addEventListener("dragend",d);const m=document.getElementById("img3");m.addEventListener("dragstart",c),m.addEventListener("dragend",d);const n=document.getElementById("img4");n.addEventListener("dragstart",c),n.addEventListener("dragend",d);const o=document.getElementById("img5");o.addEventListener("dragstart",c),o.addEventListener("dragend",d);const p=document.getElementById("img6");p.addEventListener("dragstart",c),p.addEventListener("dragend",d);const q=document.getElementById("img7");q.addEventListener("dragstart",c),q.addEventListener("dragend",d);const r=document.getElementById("img8");r.addEventListener("dragstart",c),r.addEventListener("dragend",d);const s=document.getElementById("img9");s.addEventListener("dragstart",c),s.addEventListener("dragend",d);const t=document.getElementById("img10");t.addEventListener("dragstart",c),t.addEventListener("dragend",d);const u=document.getElementById("img11");u.addEventListener("dragstart",c),u.addEventListener("dragend",d);const v=document.getElementById("img12");v.addEventListener("dragstart",c),v.addEventListener("dragend",d);const w=document.getElementById("img13");w.addEventListener("dragstart",c),w.addEventListener("dragend",d);const x=document.getElementById("img14");x.addEventListener("dragstart",c),x.addEventListener("dragend",d);const y=document.getElementById("img15");y.addEventListener("dragstart",c),y.addEventListener("dragend",d);const z=document.getElementById("img16");z.addEventListener("dragstart",c),z.addEventListener("dragend",d);const A=document.getElementById("img17");A.addEventListener("dragstart",c),A.addEventListener("dragend",d);const B=document.getElementById("img18");B.addEventListener("dragstart",c),B.addEventListener("dragend",d);const C=document.getElementById("img19");C.addEventListener("dragstart",c),C.addEventListener("dragend",d);const D=document.getElementById("img20");D.addEventListener("dragstart",c),D.addEventListener("dragend",d);const E=document.getElementById("img21");E.addEventListener("dragstart",c),E.addEventListener("dragend",d);const F=document.getElementById("img22");F.addEventListener("dragstart",c),F.addEventListener("dragend",d);const G=document.getElementById("img23");G.addEventListener("dragstart",c),G.addEventListener("dragend",d);const H=document.getElementById("img24");H.addEventListener("dragstart",c),H.addEventListener("dragend",d);const I=document.getElementById("img25");I.addEventListener("dragstart",c),I.addEventListener("dragend",d);const J=document.getElementById("img26");J.addEventListener("dragstart",c),J.addEventListener("dragend",d);const K=document.getElementById("img27");K.addEventListener("dragstart",c),K.addEventListener("dragend",d);const L=document.getElementById("img28");L.addEventListener("dragstart",c),L.addEventListener("dragend",d);const M=document.getElementById("img29");M.addEventListener("dragstart",c),M.addEventListener("dragend",d);const N=document.getElementById("img30");N.addEventListener("dragstart",c),N.addEventListener("dragend",d);const O=document.getElementById("img31");O.addEventListener("dragstart",c),O.addEventListener("dragend",d);const P=document.getElementById("img32");P.addEventListener("dragstart",c),P.addEventListener("dragend",d);const Q=document.getElementById("img33");Q.addEventListener("dragstart",c),Q.addEventListener("dragend",d);const R=document.getElementById("img34");R.addEventListener("dragstart",c),R.addEventListener("dragend",d);const S=document.getElementById("img35");S.addEventListener("dragstart",c),S.addEventListener("dragend",d);const T=document.getElementById("img36");T.addEventListener("dragstart",c),T.addEventListener("dragend",d);const U=document.getElementById("img37");U.addEventListener("dragstart",c),U.addEventListener("dragend",d);const V=document.getElementById("img38");V.addEventListener("dragstart",c),V.addEventListener("dragend",d);const W=document.getElementById("img39");W.addEventListener("dragstart",c),W.addEventListener("dragend",d);const X=document.getElementById("img40");X.addEventListener("dragstart",c),X.addEventListener("dragend",d);const Y=document.getElementById("img41");Y.addEventListener("dragstart",c),Y.addEventListener("dragend",d);const Z=document.getElementById("img42");Z.addEventListener("dragstart",c),Z.addEventListener("dragend",d);const $=document.getElementById("img43");$.addEventListener("dragstart",c),$.addEventListener("dragend",d);const _=document.getElementById("img44");_.addEventListener("dragstart",c),_.addEventListener("dragend",d);const aa=document.getElementById("img45");aa.addEventListener("dragstart",c),aa.addEventListener("dragend",d);const ba=document.getElementById("img46");ba.addEventListener("dragstart",c),ba.addEventListener("dragend",d);const ca=document.getElementById("img47");ca.addEventListener("dragstart",c),ca.addEventListener("dragend",d);const da=document.getElementById("img48");da.addEventListener("dragstart",c),da.addEventListener("dragend",d);const ea=document.getElementById("img49");ea.addEventListener("dragstart",c),ea.addEventListener("dragend",d);const fa=document.getElementById("img50");fa.addEventListener("dragstart",c),fa.addEventListener("dragend",d);const ga=document.getElementById("img51");ga.addEventListener("dragstart",c),ga.addEventListener("dragend",d);const ha=document.getElementById("img52");ha.addEventListener("dragstart",c),ha.addEventListener("dragend",d)}