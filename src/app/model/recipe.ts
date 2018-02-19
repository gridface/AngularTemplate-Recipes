export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Instruction {
instruction: string;
photo: string;
}

export class Recipe {

  public Title: string;
  public Description: string;
  public FeedsThisMany: number;
  public PreparationTime: number;
  public Ingredients: Ingredient[];
  public Instructions: Instruction[];
  public Cover_photo: string;


  constructor( public title: string,
            public description: string,
            public feedsThisMany: number,
            public preparationTime: number,
            public instructions: Instruction[],
            public ingredients: Ingredient[],
            public cover_photo: string) {

              this.Title = title;
              this.Description = description;
              this.FeedsThisMany = feedsThisMany;
              this.PreparationTime = preparationTime;
              this.Ingredients = ingredients;
              this.Instructions = instructions;
              this.Cover_photo = cover_photo;

            }

            public static createBlank() {
              return new Recipe('','',1,1,null,null,null);
            }
}
