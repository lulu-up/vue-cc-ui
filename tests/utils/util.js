// 1: 简易选择
export const findTestWrapper = (wrapper, tag) => {
    return wrapper.findAll(`[data-test="${tag}"]`);
  };
  