export type Risk = {
    risk: string | number,
    description: string | number,
    criticality: string | number,
    migration: string | number,
    resolutionDate: string | number,
}

export type KPI = {
    title: string,
    target: number,
    actuals: number,
    baseline: number,
    plan1: number,
    plan2: number,
    plan3: number,
    plan4: number
}

export type Measure = {
    _id: string,
    actuals: number,
    approved: number,
    artefact: 0 | 1 | 2,
    artefacts: Artefact[],
    budget: 0 | 1 | 2,
    focusArea: string,
    id: number,
    kpiName: string,
    kpiProgress: number,
    lineOrgSponsor: string,
    measureLead: string,
    measureSponsor: string,
    name: string,
    risk: 0 | 1 | 2,
    solutionManager: string,
    spent: number,
    target: number,
    title: string,
    description: string,
    time: string,
    risks: Risk[],
    kpiData: KPI,
    totalApprovedBudget: number,
    monthlySpendings: number[]
}

export type Artefact = {
    _id: string,
    id: number,
    description: string,
    progress: number,
    budget: string,
    achievement: string,
    work: string,
}


export type Team = {
    lead: string,
    measureSponsor: string,
    lineOrgSponsor: string,
    solutionManager: string,
}

export type DividedName = {
    firstName: string,
    lastName: string
}



export type StatusProps = {
    artefacts: number,
    budget: number,
    risks: number,
}