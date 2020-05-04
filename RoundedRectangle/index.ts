import {IInputs, IOutputs} from "./generated/ManifestTypes";
import { type } from "os";
import { isAbsolute } from "path";
import { isNull } from "util";

export class RoundedRectangle implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	// This element contains all elements of our code component example
	private _container: HTMLDivElement;
	// Power Apps component framework delegate which will be assigned to this object which would be called whenever any update happens.
	private _notifyOutputChanged: () => void;
	// Event Handler 'refreshData' reference
	private _refreshData: EventListenerOrEventListenerObject;

	private _debugLabel: HTMLLabelElement;

	//private _customerControlProps: any;

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._container = document.createElement("div");
		this._container.id = "rounded";

		//Call to create the div / rectangle
		this.createRectangle(context);

		// this._debugLabel = document.createElement("label");
		// this._debugLabel.id = "debugLabel";
		// this._debugLabel.setAttribute("style", "visibility:hidden;");
		
		//this._container.appendChild(this._debugLabel);

		//Add div element to the container
		container.appendChild(this._container);
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		this.createRectangle(context)
	}

	public createRectangle(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
		
		// var a = context.mode;
		// var height = context.mode._customControlProperties.parentDefinedControlProps.height;
		// var width = context.mode._customControlProperties.parentDefinedControlProps.width;
		
		// var testH = context.mode.allocatedHeight;
		// var testW = context.mode.allocatedWidth;

		// var height = Number(testH) - (2 * Number(context.parameters.borderWidth.raw));
		// var width = Number(testW) - (2 * Number(context.parameters.borderWidth.raw));

		var width = Number(context.parameters.internalWidth.raw) - (2 * Number(context.parameters.borderWidth.raw));
		var height = Number(context.parameters.internalHeight.raw) - (2 * Number(context.parameters.borderWidth.raw));

		//Populate the style property for the DIV
		var	style = "";
		style += "height:" + height + "px; ";
		style += "width:" + width + "px; ";
		style += "background-color:" + context.parameters.backgroundColor.raw + "; ";
		style += "border-color:" + context.parameters.borderColor.raw + "; ";
		style += "border-style:" + context.parameters.borderStyle.raw + "; ";
		style += "border-width:" + context.parameters.borderWidth.raw + "px; ";
		
		//If the the border-width is not set (set to zero) then create the border radius for each corner from the input values
		if (Number(context.parameters.borderRadius.raw) == 0){
			style += "border-radius:" + Number(context.parameters.borderRadiusTopLeft.raw) + "px ";		
			style += "" + Number(context.parameters.borderRadiusTopRight.raw) + "px ";		
			style += "" + Number(context.parameters.borderRadiusBottomRight.raw) + "px ";
			style += "" + Number(context.parameters.borderRadiusBottomLeft.raw) + "px; ";		
		}
		else{
			style += "border-radius:" + Number(context.parameters.borderRadius.raw) + "px; ";		
		}

		//Manage linear-gradients for the div (degree, color 1, color 2)
		if (Number(context.parameters.gradientDegree.raw) != 0){
			style += "background-image:linear-gradient(" + Math.abs(Number(context.parameters.gradientDegree.raw)) + "deg, " 
			style += "" + context.parameters.gradientColorOne.raw + ", " 
			style += "" + context.parameters.gradientColorTwo.raw + ")"
		}

		this._container.setAttribute("style", style);

		// if (context.parameters.showValues.raw){
		// 	var debugElement = document.getElementById('debugLabel');
		// 	if (!isNull(debugElement)){
		// 		this._debugLabel.textContent = String(testH) + ' - ' + context.parameters.showValues.raw;
		// 		this._debugLabel.setAttribute("style", "visibility:visible;");
		// 	}
		// } else {
		// 	var debugElement = document.getElementById('debugLabel');
		// 	if (!isNull(debugElement)){
		// 		this._debugLabel.setAttribute("style", "visibility:hidden;");
		// 	}
		// }
	}

	private showError(): void
	{

	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {
			
		};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}