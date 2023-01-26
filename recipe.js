function getData(){
    Dish=dish.value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Dish}`).then(data=>data.json())
    .then(data=>displayData(data))
    
}


function displayData(dishDetails){
    
    dishName=dishDetails.meals[0].strMeal
    dishCategory=dishDetails.meals[0].strCategory
    dishCont=dishDetails.meals[0].strArea
    dishInstr=dishDetails.meals[0].strInstructions
    dishImg=dishDetails.meals[0].strMealThumb
    
    // let count=1;
    // let ingredients=[];
    // for(i in dishDetails){
    //     ingredient="";
    //     measure="";
    //     if(i.startsWith("strIngredient") && dishDetails[i]){
    //         ingredient=dishDetails[i];
    //         measure=dishDetails[`strMeasure` + count];
    //         count+=1;
    //         ingredients.push(`${measure} ${ingredient}`);
    //     }
    // }

    // dishIngr=ingredients

    final.innerHTML=`<div class="row w-100 ms-1 text-center container rounded-5">
  <div class="col-lg-6 col-md-6 col-sm-12 mt-3">
      <img src=${dishImg} class="container" alt="...">
      <div class="container text-center rounded-5 mt-2 mb-2 " id="dishname"><h5><strong>${dishName}</strong></h5><h6> ${dishCont}</h6></div >
  </div >

    <div class="col-lg-6 col-md-6 col-sm-12 rounded-5 bg-light"><p class="container p-2"><h4>RECIPE</h4><br>${dishInstr}</p></div >
  </div>`


}