import {
  dateFormat,
  dateRelative,
  hexToRgb,
  rgbToHex,
  numberFormat,
  stringCapitalize,
  stringTruncate,
} from '.';

describe('test exports', () => {
  it('should run dateFormat', () => {
    const mock = jest.fn(dateFormat);
    mock(new Date('2022-01-31'));
    expect(mock).toHaveBeenCalled();
  });
  it('should run dateRelative', () => {
    const mock = jest.fn(dateRelative);
    mock(new Date('2022-01-31'));
    expect(mock).toHaveBeenCalled();
  });
  it('should run hexToRgb', () => {
    const mock = jest.fn(hexToRgb);
    mock('#30a14e');
    expect(mock).toHaveBeenCalled();
  });
  it('should run rgbToHex', () => {
    const mock = jest.fn(rgbToHex);
    mock(48, 161, 78);
    expect(mock).toHaveBeenCalled();
  });
  it('should run numberFormat', () => {
    const mock = jest.fn(numberFormat);
    mock(1337);
    expect(mock).toHaveBeenCalled();
  });
  it('should run stringCapitalize', () => {
    const mock = jest.fn(stringCapitalize);
    mock('lorem ipsum dolor sit amet');
    expect(mock).toHaveBeenCalled();
  });
  it('should run dateFormat', () => {
    const mock = jest.fn(stringTruncate);
    mock('Lorem ipsum dolor sit amet', 20);
    expect(mock).toHaveBeenCalled();
  });
});
