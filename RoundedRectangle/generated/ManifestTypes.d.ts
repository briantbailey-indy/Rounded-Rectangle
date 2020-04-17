/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    height: ComponentFramework.PropertyTypes.WholeNumberProperty;
    width: ComponentFramework.PropertyTypes.WholeNumberProperty;
    backgroundColor: ComponentFramework.PropertyTypes.StringProperty;
    borderColor: ComponentFramework.PropertyTypes.StringProperty;
    borderRadius: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusTopLeft: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusTopRight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusBottomLeft: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusBottomRight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderStyle: ComponentFramework.PropertyTypes.EnumProperty<"none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "initial" | "inherit">;
    borderWidth: ComponentFramework.PropertyTypes.WholeNumberProperty;
}
export interface IOutputs {
}
