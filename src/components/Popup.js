import {UIBase,TextButton,LinkButton} from "../UIElements";
import {Drawing} from "../Drawing";
import * as DrawUtilities from "../DrawUtilities"
import {Display} from "../Display"

export class Popup extends UIBase
{
  constructor(title, x,y,w,h)
  {
    // capture all input
    super(x,y,w,h);
    this.title = title;
    // add an invisible button in the background
    this.invisButton = new UIBase(0,0,100,100);
    let t = this;
    this.invisButton.press = ()=>{
      t.onRequestClose();
    };
    this.addChild(this.invisButton);
    this.titleBar = new TextButton(Math.floor(this.width*0.5)-Math.floor(this.title.length*0.5)+this.x,this.y,this.title);
    this.addChild(this.titleBar);
    this.closeButton = new TextButton(Math.floor(this.width*0.5)-2+this.x,this.y+this.height-1,"Close");
    this.closeButton.press = ()=>{
      t.onRequestClose();
    }
    this.addChild(this.closeButton);
    this.addChild(new LinkButton(this.x+2, this.y + 8, "REXpaint", "https://www.gridsagegames.com/rexpaint/"));
    this.addChild(new LinkButton(this.x+2, this.y + 10, "Playscii", "http://vectorpoem.com/playscii/"));
    this.addChild(new LinkButton(this.x+2, this.y + 12, "ROTjs", "http://ondras.github.io/rot.js/hp/"));
  }
  render()
  {
    DrawUtilities.fillSquare(this.x, this.y, this.width, this.height);
    DrawUtilities.drawSquare(this.x, this.y, this.width, this.height);
    Display.display.drawText(this.x+2, this.y+3, "%c{white}An ascii art editor by jonathan brodsky\n\ninspiration and code from", this.width-4); 
  }
}