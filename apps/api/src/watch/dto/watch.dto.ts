import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateWatchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  theme?: number;
}

export class UpdateWatchDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  theme: number;
}

export class DeleteWatchDto {
  @IsUUID()
  id: string;
}
