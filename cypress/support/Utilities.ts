import { calculatorUISelectors } from "./PageData/CalculatorUI";

export function formatTestId(testId: string): string {
  return `[data-test-id="${testId}"]`;
}

export function parseMathExpressionToClicks(expression: string): void {
  const components = expression.split(" ");

  components.forEach((component: string) => {
    component.split("").forEach((digit: string) => {  
      const selector = calculatorUISelectors.get(digit);

      cy
        .get(selector)
        .click();
    });
  });
}

export function mathSymbolToKeystroke(input: string): string {
  input = input.replace("÷", "/");
  input = input.replace("×", "*");
  
  return input;
}