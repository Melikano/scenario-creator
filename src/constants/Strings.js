//@flow
const Strings = {
  newScenrio: 'سناریو جدید',
  myScenarios: 'سناریوهای من',
  start: 'شروع',
  chooseName: 'برای شروع ابتدا نام سناریو را مشخص کنید',
  addDescription: 'برای سناریوی خود توضیحی اضافه کنید',
  scenarioName: 'نام سناریو',
  description: 'توضیحات...',
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
  scenarioCreatedSuccessfully: 'سناریو جدید با موفقیت ایجاد و ذخیره گردید',
  nextStep: 'در ادامه می توانید برای تست سناریو آن را شبیه سازی کنید',
  simulation: 'شبیه سازی',
  initailValue: 'مقدار اولیه',
  distributionFunc: 'تابع توزیع',
  normal: 'نرمال',
  exponentioal: 'نمایی',
  uniform: 'یکنواخت',
  parameter: 'پارامتر',
  miu: 'میانگین',
  sigma: 'انحراف معیار',
  simDuration: 'مدت زمان شبیه سازی را مشخص کنید',
  minute: 'دقیقه',
  minimum: 'کمینه',
  maximum: 'بیشینه',
  chartTitle: (thingName: string) => `نمودار تغییرات ${thingName} در طول زمان`,
  name: 'نام',
  familyName: 'نام خانوادگی',
  email: 'ایمیل',
  password: 'رمز عبور',
  login: 'ورود',
  signup: 'عضویت',
  noAccound: 'حساب کاربری ندارید؟',
  invalideInfoError: 'اطلاعات نامعتبر است',
  edit: 'ویرایش',
};

export default Strings;
