import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CatsPaths } from '../../cats-paths.const';
import { Cats, CatsBreed } from '../../shared/models/cats.interface';

@Component({
  selector: 'app-cat-details-view',
  templateUrl: './cat-details-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatDetailsViewComponent implements OnInit {
  CatsPaths = CatsPaths;
  @Input() catDetails: Cats;

  catDetailsForm = this.formBuilder.group({
    breeds: this.formBuilder.array([])
  });

  noInformationAboutCat: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildBreedsControls();
  }

  get breedsGroupArray(): FormArray {
    return this.catDetailsForm.get('breeds') as FormArray;
  }

  private buildBreedsControls(): void {
    if (this.catDetails.breeds?.length) {
      this.catDetails.breeds.forEach(breedsInfo => this.breedsGroupArray.push(
        this.buildFormGroup(breedsInfo)
      ));

      this.catDetailsForm.disable();
    } else {
      this.noInformationAboutCat = 'There is no information about the cat';
    }
  }

  private buildFormGroup(breedsInfo: CatsBreed): FormGroup {
    return this.formBuilder.group({
      name: [breedsInfo.name],
      origin: [breedsInfo.origin],
      temperament: [breedsInfo.temperament],
      description: [breedsInfo.description],
      lifeSpan: [breedsInfo.life_span]
    });
  }
}
