/**
 * @interface PressEvent
 * @description Represents a press event, which can be triggered by various
 * input methods such as mouse, touch, pen, keyboard, or virtual input.
 *
 * This interface is used to be compliant with accessibility standards and
 * to provide a consistent way to handle press interactions across different
 * device types.
 *
 * @see https://reactnative.dev/docs/pressevent
 */
export interface PressEvent {
  /** The type of press event being fired. */
  type: PressType;
  /** The pointer type that triggered the press event. */
  pointerType: PointerType;
  /** The target element of the press event. */
  target: Element;
  /** Whether the shift keyboard modifier was held during the press event. */
  shiftKey: boolean;
  /** Whether the ctrl keyboard modifier was held during the press event. */
  ctrlKey: boolean;
  /** Whether the meta keyboard modifier was held during the press event. */
  metaKey: boolean;
  /** Whether the alt keyboard modifier was held during the press event. */
  altKey: boolean;
  /**
   * By default, press events stop propagation to parent elements.
   * In cases where a handler decides not to handle a specific event,
   * it can call `continuePropagation()` to allow a parent to handle it.
   */
  continuePropagation(): void;
}
export type PressType = 'pressstart' | 'pressend' | 'pressup' | 'press';
export type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual';
