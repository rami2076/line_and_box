document.addEventListener("DOMContentLoaded", (event) => {
  var dragSrcEl = null;

  function handleDragStart(e) {
    this.style.opacity = "0.4";

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = "move";

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
      
    }

    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function (item) {
      item.classList.remove("over");
    });
  }

  let items = document.querySelectorAll(".container .box");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener("dragenter", handleDragEnter, false);
    item.addEventListener("dragover", handleDragOver, false);
    item.addEventListener("dragleave", handleDragLeave, false);
    item.addEventListener("drop", handleDrop, false);
    item.addEventListener("dragend", handleDragEnd, false);
  });


  function plus(e) {
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.draggable = true;
    div.classList.add("box");
    let p = document.createElement('p');
    let text = document.createTextNode('Test');
    p.appendChild(text)
    div.appendChild(p);
    container.appendChild(div)
    div.addEventListener("dragstart", handleDragStart, false);
    div.addEventListener("dragenter", handleDragEnter, false);
    div.addEventListener("dragover", handleDragOver, false);
    div.addEventListener("dragleave", handleDragLeave, false);
    div.addEventListener("drop", handleDrop, false);
    div.addEventListener("dragend", handleDragEnd, false);
  }
  
  const buttonElement = document.getElementById('plus');
  buttonElement.addEventListener('click', {
    handleEvent: function (event) {
      plus(event)
    }
  });

 
  new LeaderLine(
    document.getElementById('start'),
    document.getElementById('end'),
    {
      dash: {animation: true},
      startSocketGravity: [100, -70],
      endSocketGravity: [-100, 70],
      color: 'rgba(30, 130, 250, 0.5)'
    }
  );

});



