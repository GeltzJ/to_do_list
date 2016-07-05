function listing() 
{
    if (event.keyCode === 13) 
    {
        var listItem = document.createElement("li");
        var text = document.createTextNode(document.getElementById("textbox").value);
        
        listItem.appendChild(text);
        
        document.getElementById("list").appendChild(listItem);
        
        document.getElementById("textbox").value = "";
    }
}

