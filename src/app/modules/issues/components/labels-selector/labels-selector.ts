import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {
  labels = input.required<GithubLabel[]>();
}
