/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    showValues: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    internalHeight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    internalWidth: ComponentFramework.PropertyTypes.WholeNumberProperty;
    backgroundColor: ComponentFramework.PropertyTypes.StringProperty;
    borderColor: ComponentFramework.PropertyTypes.StringProperty;
    borderRadius: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusTopLeft: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusTopRight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusBottomLeft: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderRadiusBottomRight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    borderStyle: ComponentFramework.PropertyTypes.EnumProperty<"none" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inherit" | "initial" | "inset" | "outset" | "ridge" | "solid">;
    borderWidth: ComponentFramework.PropertyTypes.WholeNumberProperty;
    gradientDegree: ComponentFramework.PropertyTypes.WholeNumberProperty;
    gradientColorOne: ComponentFramework.PropertyTypes.StringProperty;
    gradientColorTwo: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
}
