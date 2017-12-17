// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked


$(document).ready(function(){
    $(".item").on('click',slideContent);
})

function slideContent(){
	$(this).children('#content').slideToggle("slow");
}
// 2. Remove each item when we click on the closing X

function closeItem(obj){
	obj.parentElement.parentElement.parentElement.remove(this);
}



// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//  The new item should also have the same properties (collapse/expand and close) as the other items

	$("#addItem").click(function(){
		
		var itemTitle;
		var itemCount = 0;

		if(document.getElementById('newtitle').value != '')
			{
			 itemTitle = document.getElementById('newtitle').value;
			}
			else
			{

				itemCount = $('.item').length;
				itemTitle = "Title " + itemCount
			}

		var itemOpen = $("<div class='item' id='expandCollapse'><div class='header'><h1 class='title'>" + itemTitle + " <button class='close' onclick='closeItem(this)'>X</button></h1></div><div id='content'>	<p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div></div>");
		
		$(".item:last").after(itemOpen);
		 
		$(".item:last").on('click',slideContent);	
 	});


//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page