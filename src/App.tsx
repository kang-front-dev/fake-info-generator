import React, { SetStateAction } from 'react';
import SliderErrors from './components/SliderErrors';
import Table from './components/Table';
import Toggler from './components/Toggler';
import { IFakeInfo } from './components/Table';

export interface ILang {
  langProps: {
    lang: string;
    setLang: React.Dispatch<SetStateAction<string>>;
  };
}

export interface IUsersData {
  usersProps: {
    usersData: Array<IFakeInfo>;
    setUsersData: React.Dispatch<SetStateAction<Array<IFakeInfo>>>;
  };
}
export interface IErrorValue {
  errorValueProps: {
    errorValue: number | string | Array<number | string>;
    setErrorValue: React.Dispatch<
      SetStateAction<number | string | Array<number | string>>
    >;
  };
}

function App() {
  const [usersData, setUsersData] = React.useState([]);
  const [lang, setLang] = React.useState('ru');
  const [errorValue, setErrorValue] = React.useState<
    number | string | Array<number | string>
  >(30);

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SliderErrors
          errorValueProps={{ errorValue: errorValue, setErrorValue: setErrorValue }}
        ></SliderErrors>
        <Toggler langProps={{ lang: lang, setLang: setLang }}></Toggler>
      </div>
      <Table
        langProps={{ lang: lang, setLang: setLang }}
        errorValueProps={{ errorValue: errorValue, setErrorValue: setErrorValue }}
        usersProps={{
          usersData: usersData,
          setUsersData: setUsersData as React.Dispatch<
            SetStateAction<Array<IFakeInfo>>
          >,
        }}
      ></Table>
    </div>
  );
}

export default App;
