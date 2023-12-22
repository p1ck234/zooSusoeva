const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


// const list = document.querySelectorAll('.faq');

// list.forEach((faq) => {
//   faq.addEventListener('click', () => {
//     faq.classList.toggle('active');
//   });
// });

// list.forEach((faq) => {
//   faq.classList.remove('active');
// });


// const list = document.querySelectorAll('.faq');

//  list.forEach((faq) => {
//         faq.addEventListener('click', () => {
//         list.forEach((faq) =>{ faq.classList.remove('active'); });
//         faq.classList.toggle('active');
//     });
// });



// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faqs.forEach(el=>{ el.classList.remove('active'); });
//     faq.classList.toggle("active");
//   });
// });


// var panels = document.getElementsByClassName("faq");
// var actives = document.getElementsByClassName('active');
// const faqs = document.querySelectorAll(".faq");

// for (i = 0; panels.length > i; i++) {
//   panels[i].onclick = function() {
//     var currentActive = actives[0];
//     if (currentActive)
//       currentActive.classList.remove("active");

//       faqs.forEach((faq) => {
//         faq.addEventListener("click", () => {
//           faq.classList.toggle("active");
//         });
//       });
//   };
// }

// var panels = document.getElementsByClassName("panel");
// var actives = document.getElementsByClassName('active');
// for (i = 0; panels.length > i; i++) {
//   panels[i].onclick = function() {
//     var currentActive = actives[0];
//     if (currentActive)
//       currentActive.classList.remove("active");

//     if (currentActive !== this)
//       this.classList.add("active");
//   };
// }


// document.querySelectorAll('.faq__question').forEach((el) => {
//   el.addEventListener('click', () => {

//     let content = el.nextElementSibling;

//     if(content.style.maxHeight) {
//       document.querySelectorAll('.faq__answer').forEach((el) =>
//       el.style.maxHeight = null)
//     } else {
//       document.querySelectorAll('.faq__answer').forEach((el) =>
//       el.style.maxHeight = null)
//       content.style.maxHeight = content.scrollHeight + 'px'
//     }
//   })
// })