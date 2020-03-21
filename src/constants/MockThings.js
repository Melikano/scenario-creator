//@flow
const MockThings = [
  {
    id: 'tempSensor',
    name: 'سنسور دما',
    type: 'sensor',
    description: 'این سنسور می تواند دماهای بین -۲۰ تا ۵۰ را اندازه گیری کند',
  },
  {
    id: 'humSensor',
    name: 'سنسور رطوبت',
    type: 'sensor',
    description: 'رطوبت را بر اساس درصد بیان می کند',
  },
  {
    id: 'lightSensor',
    name: 'سنسور روشنایی',
    type: 'sensor',
    description: 'میزان نور را بر اساس درصد بیان می کند',
  },
  {
    id: 'waterActuator',
    name: 'عملگر آب',
    type: 'actuator',
    description: 'زمین را آبیاری می کند یا نمی کند',
  },
  {
    id: 'lightActuator',
    name: 'عملگر روشنایی',
    type: 'actuator',
    description: 'روشنایی را کم یا زیاد می کند',
  },
];
export default MockThings;
