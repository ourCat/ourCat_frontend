import { fontType, fontWeightType } from "../type";

export interface IComponent {
    id?: string;
    name?: string;
    className?: string;
    children?: React.ReactNode;

    font?: fontType;
    weight?: fontWeightType;
    position?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    color?: string;
    opacity?: number;
}