
import { Method } from "../enums/instancing-method";
import instancingPerformancePage from "../pages/instancing-performace.page";


context('Three.js instancing performace', () => {

  const baseUrl = "https://threejs.org/examples/#webgl_instancing_performance";
  const oneGPUCall = 1;

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should `INSTANCED` method use one GPU call', () => {
    const intanceCountToDraw = '100';
    // select INSTANCED method
    instancingPerformancePage.selecInstancingtMethod(Method.INSTANCED);
    // set instance count
    instancingPerformancePage.typeIntancesCount(intanceCountToDraw);
    // GPU count
    instancingPerformancePage.GPUCallCount().should('contain', oneGPUCall);
  })

  it('should `MERGED` method use one GPU call', () => {
    const intanceCountToDraw = '100';
    // select MERGED method
    instancingPerformancePage.selecInstancingtMethod(Method.MERGED);
    // set instance count
    instancingPerformancePage.typeIntancesCount(intanceCountToDraw);
    // GPU count
    instancingPerformancePage.GPUCallCount().should('contain', oneGPUCall);
  })

  it('should `NAIVE` method use as many GPU calls as instance count', () => {
    const intanceCountToDraw = '4789';
    // select NATIVE method
    instancingPerformancePage.selecInstancingtMethod(Method.NAIVE);
    // set instance count
    instancingPerformancePage.typeIntancesCount(intanceCountToDraw);
    // verifiy GPU calls equal instance count
    instancingPerformancePage.GPUCallCount().should('contain', intanceCountToDraw);
  })
})
