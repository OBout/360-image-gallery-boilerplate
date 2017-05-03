AFRAME.registerComponent('scrollleft', {
  schema: {
    on: { type: 'string' }
  },
  init: function()  {
    this.el.addEventListener(this.data.on, this.scroll);
  },
  scroll: function()
  {
    var data = this.data;

    //The current position is what we're modifying
    var links = document.querySelector("#links");
    var layout = links.getAttribute('layout');
    var position = links.getAttribute('position');
    var maxLeft =  -(layout.margin * layout.columns);
    if(position.x != maxLeft) {
      var newX = position.x - layout.margin;
      links.setAttribute('animation', 'from', position.x + ' ' + position.y + ' ' + position.z);
      links.setAttribute('animation', 'to', newX + ' ' + position.y + ' ' + position.z);
      links.emit('scrollpane');
      position.x = newX;
      links.setAttribute('position', position);
    }
  }
});

AFRAME.registerComponent('scrollright', { 
  schema: {
    on: { type: 'string' }
  },
  init: function()  {
    this.el.addEventListener(this.data.on, this.scroll);
  },
  scroll: function(links, layout)
  {
    //The current position is what we're modifying
    var links = document.querySelector("#links");
    var layout = links.getAttribute('layout');
    var position = links.getAttribute('position');
    var maxRight = 0;
    if(position.x != maxRight) {
      var newX = position.x + layout.margin;
      links.setAttribute('animation', 'from', position.x + ' ' + position.y + ' ' + position.z);
      links.setAttribute('animation', 'to', newX + ' ' + position.y + ' ' + position.z);
      links.emit('scrollpane');
      position.x = newX;
      links.setAttribute('position', position);
    }
  }
});
