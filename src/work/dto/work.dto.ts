import { IsArray, IsOptional, IsString } from "class-validator";

export class WorkDto {
  @IsString()
  name: string;

  @IsArray()
  images: string[];

  @IsArray()
  tags: string[];

  @IsString()
  goal: string;

  @IsString()
  conclusion: string;
}

export class WorkDtoOptional {
  name: string;
  images: string[];
  tags: string[];
  goal: string;
  conclusion: string;
}
