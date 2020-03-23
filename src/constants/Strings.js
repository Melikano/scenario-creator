//@flow
const Strings = {
  newScenrio: 'سناریو جدید',
  myScenarios: 'سناریوهای من',
  start: 'شروع',
  chooseName: 'برای شروع ابتدا نام سناریو را مشخص کنید',
  scenarioName: 'نام سناریو',
  enter: 'ورود',
  welcome: 'به سناریوساز خوش آمدید!',
  nextButtonText: 'مرحله بعد',
  previousButtonText: 'مرحله قبل',
  chooseThings: 'اشیاء مورد نظر خود را انتخاب کنید',
  addState: 'افزودن حالت جدید',
  addTransition: 'افزودن گذار جدید',
  stateText: (stateNum: number) => `حالت ${stateNum}`,
  confirm: 'تایید',
  cancel: 'انصراف',
  submitActuatorsValueInState: (stateNum: number) =>
    `مقادیر عملگرها را در حالت ${stateNum} وارد کنید`,
  submitDestAndSrc: 'مبداء و مقصد گذار را مشخص کنید',
  lessThanTwoStateError:
    'برای اضافه کردن گذار باید حداقل دو حالت ایجاد کرده باشید',
  submitSensorsConditions: 'شرایط سنسورها در گذار را مشخص کنید',
  source: 'حالت مبداء',
  destination: 'حالت مقصد',
};

export default Strings;
