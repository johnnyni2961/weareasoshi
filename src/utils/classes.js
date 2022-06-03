// Common tailwind classes

const linkPrimary = 'text-blue-600 dark:text-blue-400 link-hover';
const textInput =
  'input input-bordered w-full bg-gray-50 text-gray-900 block p-2.5 dark:text-white dark:bg-gray-600 dark:placeholder-gray-400';
const textArea =
  'textarea textarea-bordered w-full bg-gray-50 text-gray-900 block p-2.5 dark:text-white dark:bg-gray-600 dark:placeholder-gray-400';
const baseLabel = 'font-medium text-gray-900 dark:text-gray-300';
const textLabel = `block mb-2 text-sm ${baseLabel}`;
const selectInput =
  'select select-bordered w-full bg-gray-50 text-gray-900 dark:text-white dark:bg-gray-600';
const tooltipPrimary =
  'tooltip tooltip-open tooltip-bottom tooltip-primary z-10';
const tooltipSuccess =
  'tooltip tooltip-open tooltip-bottom tooltip-success z-10';
const tooltipError = 'tooltip tooltip-open tooltip-bottom tooltip-error z-10';

export {
  linkPrimary,
  textInput,
  textLabel,
  textArea,
  selectInput,
  baseLabel as checkBoxLabel,
  tooltipPrimary,
  tooltipSuccess,
  tooltipError,
};
