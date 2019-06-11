declare global {
    const h: Function
}

export interface Props {
    [key: string]: any
}

export interface VNode {
    $tag$?: string | number;
    $key$?: string | number;
    $text$?: string;
    $children$?: VNode[];
    $attrs$?: any;
    $name$?: string;
    $flags$: number;
    $elm$?: any;
}