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
  submitActuatorsValueInState: (stateNum: number) =>
    `مقادیر عملگرها را در حالت ${stateNum} وارد کنید`,
};

export default Strings;
