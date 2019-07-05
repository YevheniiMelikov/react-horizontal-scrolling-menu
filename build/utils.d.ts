import { Ref } from './types';
declare const notUndefOrNull: (val: any) => boolean;
declare const getClientRect: (elem: Ref) => {
    width: number;
    x: number;
};
declare const formatTranslate: (val: number) => number;
declare const translateIsValid: (val: any) => boolean;
declare const validateTranslate: (value: any, defaultValue: number) => number;
declare const testPassiveEventSupport: () => boolean;
export { notUndefOrNull, getClientRect, testPassiveEventSupport, validateTranslate, translateIsValid, formatTranslate, };
//# sourceMappingURL=utils.d.ts.map